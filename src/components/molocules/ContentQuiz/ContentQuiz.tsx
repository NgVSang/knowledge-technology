import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ContentQuizProps } from "./ContentQuiz.types";
import Image from "next/image";
import { DefaultAvatarIcon, DisLikeIcon, SmallLogoIcon } from "@/assets/icons";
import { useSelector } from "react-redux";
import { authSelector } from "@/redux/reducers";
import toast from "react-hot-toast";
import { ModelApi } from "@/services";
import {
  ForceGraph2D,
  ForceGraph3D,
  ForceGraphVR,
  ForceGraphAR,
} from "react-force-graph";
import dynamic from "next/dynamic";

//@ts-ignore
import Graph from "react-graph-vis";

const ContentQuiz: FC<ContentQuizProps> = ({ data }) => {
  const { loggedin, user } = useSelector(authSelector);
  const layoutRef = useRef<any>(null);
  const [width, setWidth] = useState(0);
  const [component, setComponent] = useState<JSX.Element>();
  const [show, setShow] = useState(false);
  const [bad, setBad] = useState(false);

  function randomColor() {
    const red = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    const green = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    const blue = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    return `#${red}${green}${blue}`;
  }

  const nodes = useMemo(() => {
    const grap_data: {
      id: number;
      name: string;
      color: string;
    }[] = [];
    const graph = data.graph || [];
    for (let i = 0; i < graph.length; i++) {
      const data = graph[i];
      const find_1 = grap_data.find((e) => e.id === data.source);
      const find_2 = grap_data.find((e) => e.id === data.target);
      const color = randomColor();
      if (!find_1) {
        grap_data.push({
          id: data.source,
          name: data.source_name,
          color: color,
        });
      }
      if (!find_2) {
        grap_data.push({
          id: data.target,
          name: data.target_name,
          color: color,
        });
      }
    }
    return grap_data;
  }, [data.graph]);

  const links = useMemo(() => {
    const edges_data = [];
    const graph = data.graph || [];
    for (let i = 0; i < graph.length; i++) {
      edges_data.push({
        source: graph[i].source,
        target: graph[i].target,
        name: graph[i].predicate,
        color: "white",
      });
    }

    return edges_data;
  }, [data.graph]);

  useEffect(() => {
    if (layoutRef.current) {
      setWidth(layoutRef.current.offsetWidth); // Lấy width ban đầu
    }
  }, []);

  useEffect(() => {
    async function loadModule() {
      const { ForceGraph3D } = await import("react-force-graph");
      setComponent(
        <ForceGraph3D
          graphData={{
            nodes: nodes,
            links: links,
          }}
          height={500}
          width={width}
          backgroundColor="black"
          linkDirectionalArrowLength={3}
          linkDirectionalArrowResolution={5}
          linkDirectionalArrowRelPos={1}
        />
      );
    }
    void loadModule();
  }, [nodes, links, width]);

  if (data.type === "ASK") {
    return (
      <div className="flex flex-row px-[20px] pt-[30px] items-start gap-2  w-full">
        <Image
          src={DefaultAvatarIcon}
          alt="Logo"
          className="w-[40px] h-[40px] rounded-full"
        />
        <div className=" flex flex-col gap-4 mt-[7px] w-full">
          <span className="font-sans font-semibold text-black text-xl">
            {user?.name || "Customer"}
          </span>
          <div className="flex flex-col mt-[5px] gap-2">
            <p className="font-sans font-normal text-black text-base mb-[10px]">
              {data.question}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-row px-[20px] pt-[30px] items-start gap-2 w-full "
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      <div className="rounded-full min-w-[40px] h-[40px] bg-gray-200 border border-gray-200 flex items-center justify-center">
        <Image src={SmallLogoIcon} alt="Logo" className="w-[20px] h-[20px]" />
      </div>
      <div className="flex flex-col gap-4 mt-[7px] w-full">
        <span className="font-sans font-semibold text-black text-xl">Quiz</span>
        <div className="flex flex-col mt-[5px] gap-2">
          <p className="font-sans font-medium text-black text-base mb-[10px]">
            {data.answer === "" ? "Not Found" : data.answer}
          </p>
        </div>
        {data.graph && data.graph.length > 0 && (
          <div
            className="flex h-[500px] w-full bg-slate-100 rounded-[4px]"
            ref={layoutRef}
          >
            {component}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentQuiz;
