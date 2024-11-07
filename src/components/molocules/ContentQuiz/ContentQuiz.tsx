import React, { FC, useCallback, useMemo, useState } from "react";
import { ContentQuizProps } from "./ContentQuiz.types";
import Image from "next/image";
import { DefaultAvatarIcon, DisLikeIcon, SmallLogoIcon } from "@/assets/icons";
import { useSelector } from "react-redux";
import { authSelector } from "@/redux/reducers";
import toast from "react-hot-toast";
import { ModelApi } from "@/services";
//@ts-ignore
import Graph from "react-graph-vis";

const ContentQuiz: FC<ContentQuizProps> = ({ data }) => {
  const { loggedin, user } = useSelector(authSelector);
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
      label: string;
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
          label: data.source_name,
          color: color,
        });
      }
      if (!find_2) {
        grap_data.push({
          id: data.target,
          label: data.target_name,
          color,
        });
      }
    }
    return grap_data;
  }, [data.graph]);

  const edges = useMemo(() => {
    const edges_data = [];
    const graph = data.graph || [];
    for (let i = 0; i < graph.length; i++) {
      edges_data.push({
        from: graph[i].source,
        to: graph[i].target,
        label: graph[i].predicate,
      });
    }

    return edges_data;
  }, [data.graph]);

  const feedbackList = useMemo(() => {
    return [
      "Wrong answer!",
      "Wrong explain!",
      "Wrong both answer and explain!",
    ];
  }, []);

  const handleFeedback = useCallback(async (feedback: string) => {
    try {
      const loadingId = toast.loading("Sending feedback!");
      const res = await ModelApi.ratingConversationContent(data._id, feedback);
      toast.remove(loadingId);
      toast.success(res.data?.message && "Thank you for your feedback!");
    } catch (error: any) {
      toast.error(error?.message && "Fail to send feedback, please try again!");
    } finally {
      setShow(false);
      setBad(false);
    }
  }, []);

  const handleBadResponse = useCallback(() => {
    setBad(true);
  }, []);

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
      className="flex flex-row px-[20px] pt-[30px] items-start gap-2 w-full"
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
          <div className="flex h-[700px] w-full bg-slate-100 rounded-[4px]">
            <Graph
              key={Math.random()}
              graph={{
                nodes: nodes,
                edges: edges,
              }}
              options={{
                layout: {
                  hierarchical: true,
                },
              }}
              events={{}}
            />
          </div>
        )}
        <div className="flex flex-row h-[30px]">
          {show && (
            <Image
              alt="DisLikeIcon"
              src={DisLikeIcon}
              title="Bad response"
              className="w-[20px] h-[20px] cursor-pointer bg-white"
              onClick={handleBadResponse}
            />
          )}
        </div>
        {bad && (
          <div className="p-[15px] border border-black rounded-[10px]">
            <div className="w-full flex flex-row justify-between pb-5 items-center">
              <span className="text-gray-500 font-sans text-base">
                Tell us more:
              </span>
              <span
                className="text-gray-600 font-sans text-base cursor-pointer hover:text-gray-800 p-1"
                onClick={() => {
                  setBad(false);
                }}
              >
                X
              </span>
            </div>
            <div className="w-full flex flex-row flex-wrap gap-5">
              {feedbackList.map((data) => (
                <div
                  className="px-[12px] py-[4px] text-sm font-sans text-gray-500 cursor-pointer border border-gray-500 rounded-[8px] hover:text-gray-800 hover:border-gray-800"
                  onClick={() => {
                    handleFeedback(data);
                  }}
                >
                  {data}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentQuiz;
