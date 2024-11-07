export const graph = {
  answer:
    "Based on the provided context, Setmelanotide is a compound that treats Bardet-Biedl syndrome (Provenance: ChEMBL, DrugCentral). It is a melanocortin 4 receptor (MC4R) agonist that has been approved for chronic weight management in patients with obesity due to Bardet-Biedl syndrome. However, I strongly advise seeking guidance from a healthcare professional before starting any medication regimen.",
  graph: [
    {
      source: 146415,
      source_type: "Disease",
      source_name: "Bardet-Biedl syndrome",
      edge_type: "ISA_DiD",
      target: 144044,
      target_type: "Disease",
      target_name: "syndrome",
      provenance: "Disease Ontology",
      evidence: {
        source: "Disease Ontology",
      },
      predicate: "ISA",
      context:
        "Disease Bardet-Biedl syndrome isa Disease syndrome and Provenance of this association is Disease Ontology.",
      context_with_edge:
        "Disease Bardet-Biedl syndrome isa Disease syndrome and Provenance of this association is Disease Ontology and attributes associated with this association is in the following JSON format:\n {'source': 'Disease Ontology'}\n\n",
    },
    {
      source: 146415,
      source_type: "Disease",
      source_name: "Bardet-Biedl syndrome",
      edge_type: "ISA_DiD",
      target: 143717,
      target_type: "Disease",
      target_name: "autosomal recessive disease",
      provenance: "Disease Ontology",
      evidence: {
        source: "Disease Ontology",
      },
      predicate: "ISA",
      context:
        "Disease Bardet-Biedl syndrome isa Disease autosomal recessive disease and Provenance of this association is Disease Ontology.",
      context_with_edge:
        "Disease Bardet-Biedl syndrome isa Disease autosomal recessive disease and Provenance of this association is Disease Ontology and attributes associated with this association is in the following JSON format:\n {'source': 'Disease Ontology'}\n\n",
    },
    {
      source: 551025,
      source_type: "Compound",
      source_name: "Setmelanotide",
      edge_type: "TREATS_CtD",
      target: 146415,
      target_type: "Disease",
      target_name: "Bardet-Biedl syndrome",
      provenance: "ChEMBL, DrugCentral",
      evidence: {
        phase: 3,
        source: ["ChEMBL", "DrugCentral"],
        sources: ["ChEMBL", "DrugCentral"],
        act_sources: ["IUPHAR", "DRUG LABEL"],
      },
      predicate: "TREATS",
      context:
        "Compound Setmelanotide treats Disease Bardet-Biedl syndrome and Provenance of this association is ChEMBL, DrugCentral.",
      context_with_edge:
        "Compound Setmelanotide treats Disease Bardet-Biedl syndrome and Provenance of this association is ChEMBL, DrugCentral and attributes associated with this association is in the following JSON format:\n {'phase': 3, 'source': ['ChEMBL', 'DrugCentral'], 'sources': ['ChEMBL', 'DrugCentral'], 'act_sources': ['IUPHAR', 'DRUG LABEL']}\n\n",
    },
    {
      source: 146415,
      source_type: "Disease",
      source_name: "Bardet-Biedl syndrome",
      edge_type: "ASSOCIATES_DaG",
      target: 2506356,
      target_type: "Gene",
      target_name: "BBS12",
      provenance: "DISEASES",
      evidence: {
        diseases_identifiers: [
          "https://diseases.jensenlab.org/Entity?documents=10&type1=9606&id1=ENSP00000438273&type2=-26&id2=DOID:1935",
          "MedlinePlus",
          "UniProtKB-KW",
        ],
        diseases_scores: ["7.066", "CURATED", "CURATED"],
        sources: ["DISEASES"],
        diseases_sources: ["textmining", "knowledge", "knowledge"],
        diseases_confidences: [3.533, 5, 4],
      },
      predicate: "ASSOCIATES",
      context:
        "Disease Bardet-Biedl syndrome associates Gene BBS12 and Provenance of this association is DISEASES.",
      context_with_edge:
        "Disease Bardet-Biedl syndrome associates Gene BBS12 and Provenance of this association is DISEASES and attributes associated with this association is in the following JSON format:\n {'diseases_identifiers': ['https://diseases.jensenlab.org/Entity?documents=10&type1=9606&id1=ENSP00000438273&type2=-26&id2=DOID:1935', 'MedlinePlus', 'UniProtKB-KW'], 'diseases_scores': ['7.066', 'CURATED', 'CURATED'], 'sources': ['DISEASES'], 'diseases_sources': ['textmining', 'knowledge', 'knowledge'], 'diseases_confidences': [3.533, 5.0, 4.0]}\n\n",
    },
    {
      source: 146415,
      source_type: "Disease",
      source_name: "Bardet-Biedl syndrome",
      edge_type: "ASSOCIATES_DaG",
      target: 2499318,
      target_type: "Gene",
      target_name: "BBS9",
      provenance: "DISEASES",
      evidence: {
        diseases_identifiers: [
          "https://diseases.jensenlab.org/Entity?documents=10&type1=9606&id1=ENSP00000242067&type2=-26&id2=DOID:1935",
          "MedlinePlus",
          "UniProtKB-KW",
        ],
        diseases_scores: ["7.248", "CURATED", "CURATED"],
        sources: ["DISEASES"],
        diseases_sources: ["textmining", "knowledge", "knowledge"],
        diseases_confidences: [3.624, 5, 4],
      },
      predicate: "ASSOCIATES",
      context:
        "Disease Bardet-Biedl syndrome associates Gene BBS9 and Provenance of this association is DISEASES.",
      context_with_edge:
        "Disease Bardet-Biedl syndrome associates Gene BBS9 and Provenance of this association is DISEASES and attributes associated with this association is in the following JSON format:\n {'diseases_identifiers': ['https://diseases.jensenlab.org/Entity?documents=10&type1=9606&id1=ENSP00000242067&type2=-26&id2=DOID:1935', 'MedlinePlus', 'UniProtKB-KW'], 'diseases_scores': ['7.248', 'CURATED', 'CURATED'], 'sources': ['DISEASES'], 'diseases_sources': ['textmining', 'knowledge', 'knowledge'], 'diseases_confidences': [3.624, 5.0, 4.0]}\n\n",
    },
    {
      source: 146415,
      source_type: "Disease",
      source_name: "Bardet-Biedl syndrome",
      edge_type: "ASSOCIATES_DaG",
      target: 2490677,
      target_type: "Gene",
      target_name: "BBS2",
      provenance: "DISEASES",
      evidence: {
        diseases_identifiers: [
          "https://diseases.jensenlab.org/Entity?documents=10&type1=9606&id1=ENSP00000245157&type2=-26&id2=DOID:1935",
          "MedlinePlus",
          "UniProtKB-KW",
        ],
        diseases_scores: ["7.629", "CURATED", "CURATED"],
        sources: ["DISEASES"],
        diseases_sources: ["textmining", "knowledge", "knowledge"],
        diseases_confidences: [3.815, 5, 4],
      },
      predicate: "ASSOCIATES",
      context:
        "Disease Bardet-Biedl syndrome associates Gene BBS2 and Provenance of this association is DISEASES.",
      context_with_edge:
        "Disease Bardet-Biedl syndrome associates Gene BBS2 and Provenance of this association is DISEASES and attributes associated with this association is in the following JSON format:\n {'diseases_identifiers': ['https://diseases.jensenlab.org/Entity?documents=10&type1=9606&id1=ENSP00000245157&type2=-26&id2=DOID:1935', 'MedlinePlus', 'UniProtKB-KW'], 'diseases_scores': ['7.629', 'CURATED', 'CURATED'], 'sources': ['DISEASES'], 'diseases_sources': ['textmining', 'knowledge', 'knowledge'], 'diseases_confidences': [3.815, 5.0, 4.0]}\n\n",
    },
    {
      source: 146415,
      source_type: "Disease",
      source_name: "Bardet-Biedl syndrome",
      edge_type: "ASSOCIATES_DaG",
      target: 2505325,
      target_type: "Gene",
      target_name: "BBS5",
      provenance: "DISEASES",
      evidence: {
        diseases_identifiers: [
          "https://diseases.jensenlab.org/Entity?documents=10&type1=9606&id1=ENSP00000295240&type2=-26&id2=DOID:1935",
          "MedlinePlus",
          "UniProtKB-KW",
        ],
        diseases_scores: ["7.312", "CURATED", "CURATED"],
        sources: ["DISEASES"],
        diseases_sources: ["textmining", "knowledge", "knowledge"],
        diseases_confidences: [3.656, 5, 4],
      },
      predicate: "ASSOCIATES",
      context:
        "Disease Bardet-Biedl syndrome associates Gene BBS5 and Provenance of this association is DISEASES.",
      context_with_edge:
        "Disease Bardet-Biedl syndrome associates Gene BBS5 and Provenance of this association is DISEASES and attributes associated with this association is in the following JSON format:\n {'diseases_identifiers': ['https://diseases.jensenlab.org/Entity?documents=10&type1=9606&id1=ENSP00000295240&type2=-26&id2=DOID:1935', 'MedlinePlus', 'UniProtKB-KW'], 'diseases_scores': ['7.312', 'CURATED', 'CURATED'], 'sources': ['DISEASES'], 'diseases_sources': ['textmining', 'knowledge', 'knowledge'], 'diseases_confidences': [3.656, 5.0, 4.0]}\n\n",
    },
    {
      source: 146415,
      source_type: "Disease",
      source_name: "Bardet-Biedl syndrome",
      edge_type: "ASSOCIATES_DaG",
      target: 2490678,
      target_type: "Gene",
      target_name: "BBS4",
      provenance: "DISEASES",
      evidence: {
        diseases_identifiers: [
          "https://diseases.jensenlab.org/Entity?documents=10&type1=9606&id1=ENSP00000268057&type2=-26&id2=DOID:1935",
          "MedlinePlus",
          "UniProtKB-KW",
        ],
        diseases_scores: ["7.668", "CURATED", "CURATED"],
        sources: ["DISEASES"],
        diseases_sources: ["textmining", "knowledge", "knowledge"],
        diseases_confidences: [3.834, 5, 4],
      },
      predicate: "ASSOCIATES",
      context:
        "Disease Bardet-Biedl syndrome associates Gene BBS4 and Provenance of this association is DISEASES.",
      context_with_edge:
        "Disease Bardet-Biedl syndrome associates Gene BBS4 and Provenance of this association is DISEASES and attributes associated with this association is in the following JSON format:\n {'diseases_identifiers': ['https://diseases.jensenlab.org/Entity?documents=10&type1=9606&id1=ENSP00000268057&type2=-26&id2=DOID:1935', 'MedlinePlus', 'UniProtKB-KW'], 'diseases_scores': ['7.668', 'CURATED', 'CURATED'], 'sources': ['DISEASES'], 'diseases_sources': ['textmining', 'knowledge', 'knowledge'], 'diseases_confidences': [3.834, 5.0, 4.0]}\n\n",
    },
    {
      source: 146415,
      source_type: "Disease",
      source_name: "Bardet-Biedl syndrome",
      edge_type: "ASSOCIATES_DaG",
      target: 2503604,
      target_type: "Gene",
      target_name: "ARL6",
      provenance: "DISEASES",
      evidence: {
        diseases_identifiers: ["MedlinePlus", "UniProtKB-KW"],
        diseases_scores: ["CURATED", "CURATED"],
        sources: ["DISEASES"],
        diseases_sources: ["knowledge", "knowledge"],
        diseases_confidences: [5, 4],
      },
      predicate: "ASSOCIATES",
      context:
        "Disease Bardet-Biedl syndrome associates Gene ARL6 and Provenance of this association is DISEASES.",
      context_with_edge:
        "Disease Bardet-Biedl syndrome associates Gene ARL6 and Provenance of this association is DISEASES and attributes associated with this association is in the following JSON format:\n {'diseases_identifiers': ['MedlinePlus', 'UniProtKB-KW'], 'diseases_scores': ['CURATED', 'CURATED'], 'sources': ['DISEASES'], 'diseases_sources': ['knowledge', 'knowledge'], 'diseases_confidences': [5.0, 4.0]}\n\n",
    },
    {
      source: 146415,
      source_type: "Disease",
      source_name: "Bardet-Biedl syndrome",
      edge_type: "ASSOCIATES_DaG",
      target: 2490676,
      target_type: "Gene",
      target_name: "BBS1",
      provenance: "DISEASES",
      evidence: {
        diseases_identifiers: [
          "https://diseases.jensenlab.org/Entity?documents=10&type1=9606&id1=ENSP00000317469&type2=-26&id2=DOID:1935",
          "MedlinePlus",
          "UniProtKB-KW",
        ],
        diseases_scores: ["7.914", "CURATED", "CURATED"],
        sources: ["DISEASES"],
        diseases_sources: ["textmining", "knowledge", "knowledge"],
        diseases_confidences: [3.957, 5, 4],
      },
      predicate: "ASSOCIATES",
      context:
        "Disease Bardet-Biedl syndrome associates Gene BBS1 and Provenance of this association is DISEASES.",
      context_with_edge:
        "Disease Bardet-Biedl syndrome associates Gene BBS1 and Provenance of this association is DISEASES and attributes associated with this association is in the following JSON format:\n {'diseases_identifiers': ['https://diseases.jensenlab.org/Entity?documents=10&type1=9606&id1=ENSP00000317469&type2=-26&id2=DOID:1935', 'MedlinePlus', 'UniProtKB-KW'], 'diseases_scores': ['7.914', 'CURATED', 'CURATED'], 'sources': ['DISEASES'], 'diseases_sources': ['textmining', 'knowledge', 'knowledge'], 'diseases_confidences': [3.957, 5.0, 4.0]}\n\n",
    },
    {
      source: 146415,
      source_type: "Disease",
      source_name: "Bardet-Biedl syndrome",
      edge_type: "ASSOCIATES_DaG",
      target: 2499764,
      target_type: "Gene",
      target_name: "WDPCP",
      provenance: "DISEASES",
      evidence: {
        diseases_identifiers: ["UniProtKB-KW"],
        diseases_scores: ["CURATED"],
        sources: ["DISEASES"],
        diseases_sources: ["knowledge"],
        diseases_confidences: [4],
      },
      predicate: "ASSOCIATES",
      context:
        "Disease Bardet-Biedl syndrome associates Gene WDPCP and Provenance of this association is DISEASES.",
      context_with_edge:
        "Disease Bardet-Biedl syndrome associates Gene WDPCP and Provenance of this association is DISEASES and attributes associated with this association is in the following JSON format:\n {'diseases_identifiers': ['UniProtKB-KW'], 'diseases_scores': ['CURATED'], 'sources': ['DISEASES'], 'diseases_sources': ['knowledge'], 'diseases_confidences': [4.0]}\n\n",
    },
    {
      source: 146415,
      source_type: "Disease",
      source_name: "Bardet-Biedl syndrome",
      edge_type: "ASSOCIATES_DaG",
      target: 2500849,
      target_type: "Gene",
      target_name: "BBS7",
      provenance: "DISEASES",
      evidence: {
        diseases_identifiers: [
          "https://diseases.jensenlab.org/Entity?documents=10&type1=9606&id1=ENSP00000264499&type2=-26&id2=DOID:1935",
          "MedlinePlus",
          "UniProtKB-KW",
        ],
        diseases_scores: ["7.465", "CURATED", "CURATED"],
        sources: ["DISEASES"],
        diseases_sources: ["textmining", "knowledge", "knowledge"],
        diseases_confidences: [3.732, 5, 4],
      },
      predicate: "ASSOCIATES",
      context:
        "Disease Bardet-Biedl syndrome associates Gene BBS7 and Provenance of this association is DISEASES.",
      context_with_edge:
        "Disease Bardet-Biedl syndrome associates Gene BBS7 and Provenance of this association is DISEASES and attributes associated with this association is in the following JSON format:\n {'diseases_identifiers': ['https://diseases.jensenlab.org/Entity?documents=10&type1=9606&id1=ENSP00000264499&type2=-26&id2=DOID:1935', 'MedlinePlus', 'UniProtKB-KW'], 'diseases_scores': ['7.465', 'CURATED', 'CURATED'], 'sources': ['DISEASES'], 'diseases_sources': ['textmining', 'knowledge', 'knowledge'], 'diseases_confidences': [3.732, 5.0, 4.0]}\n\n",
    },
    {
      source: 146415,
      source_type: "Disease",
      source_name: "Bardet-Biedl syndrome",
      edge_type: "ASSOCIATES_DaG",
      target: 2502823,
      target_type: "Gene",
      target_name: "BBS10",
      provenance: "DISEASES",
      evidence: {
        diseases_identifiers: [
          "https://diseases.jensenlab.org/Entity?documents=10&type1=9606&id1=ENSP00000497413&type2=-26&id2=DOID:1935",
          "MedlinePlus",
          "UniProtKB-KW",
        ],
        diseases_scores: ["7.352", "CURATED", "CURATED"],
        sources: ["DISEASES"],
        diseases_sources: ["textmining", "knowledge", "knowledge"],
        diseases_confidences: [3.676, 5, 4],
      },
      predicate: "ASSOCIATES",
      context:
        "Disease Bardet-Biedl syndrome associates Gene BBS10 and Provenance of this association is DISEASES.",
      context_with_edge:
        "Disease Bardet-Biedl syndrome associates Gene BBS10 and Provenance of this association is DISEASES and attributes associated with this association is in the following JSON format:\n {'diseases_identifiers': ['https://diseases.jensenlab.org/Entity?documents=10&type1=9606&id1=ENSP00000497413&type2=-26&id2=DOID:1935', 'MedlinePlus', 'UniProtKB-KW'], 'diseases_scores': ['7.352', 'CURATED', 'CURATED'], 'sources': ['DISEASES'], 'diseases_sources': ['textmining', 'knowledge', 'knowledge'], 'diseases_confidences': [3.676, 5.0, 4.0]}\n\n",
    },
    {
      source: 146415,
      source_type: "Disease",
      source_name: "Bardet-Biedl syndrome",
      edge_type: "ASSOCIATES_DaG",
      target: 2504447,
      target_type: "Gene",
      target_name: "BBIP1",
      provenance: "DISEASES",
      evidence: {
        diseases_identifiers: [
          "https://diseases.jensenlab.org/Entity?documents=10&type1=9606&id1=ENSP00000433157&type2=-26&id2=DOID:1935",
          "UniProtKB-KW",
        ],
        diseases_scores: ["6.313", "CURATED"],
        sources: ["DISEASES"],
        diseases_sources: ["textmining", "knowledge"],
        diseases_confidences: [3.157, 4],
      },
      predicate: "ASSOCIATES",
      context:
        "Disease Bardet-Biedl syndrome associates Gene BBIP1 and Provenance of this association is DISEASES.",
      context_with_edge:
        "Disease Bardet-Biedl syndrome associates Gene BBIP1 and Provenance of this association is DISEASES and attributes associated with this association is in the following JSON format:\n {'diseases_identifiers': ['https://diseases.jensenlab.org/Entity?documents=10&type1=9606&id1=ENSP00000433157&type2=-26&id2=DOID:1935', 'UniProtKB-KW'], 'diseases_scores': ['6.313', 'CURATED'], 'sources': ['DISEASES'], 'diseases_sources': ['textmining', 'knowledge'], 'diseases_confidences': [3.157, 4.0]}\n\n",
    },
    {
      source: 146415,
      source_type: "Disease",
      source_name: "Bardet-Biedl syndrome",
      edge_type: "RESEMBLES_DrD",
      target: 147307,
      target_type: "Disease",
      target_name: "primary ciliary dyskinesia",
      provenance: "NCBI PubMed",
      evidence: {
        enrichment: 93.56066507551296,
        source: "NCBI PubMed",
        cooccur: 6,
        fisher: 8.830222610350453e-11,
        odds: 94.89549177826336,
      },
      predicate: "RESEMBLES",
      context:
        "Disease Bardet-Biedl syndrome resembles Disease primary ciliary dyskinesia and Provenance of this association is NCBI PubMed.",
      context_with_edge:
        "Disease Bardet-Biedl syndrome resembles Disease primary ciliary dyskinesia and Provenance of this association is NCBI PubMed and attributes associated with this association is in the following JSON format:\n {'enrichment': 93.56066507551296, 'source': 'NCBI PubMed', 'cooccur': 6, 'fisher': 8.830222610350453e-11, 'odds': 94.89549177826336}\n\n",
    },
    {
      source: 146415,
      source_type: "Disease",
      source_name: "Bardet-Biedl syndrome",
      edge_type: "RESEMBLES_DrD",
      target: 150939,
      target_type: "Disease",
      target_name: "chronic kidney disease",
      provenance: "NCBI PubMed",
      evidence: {
        enrichment: 2.769900592315755,
        source: "NCBI PubMed",
        cooccur: 12,
        fisher: 0.001700540919040838,
        odds: 2.801845359713585,
      },
      predicate: "RESEMBLES",
      context:
        "Disease Bardet-Biedl syndrome resembles Disease chronic kidney disease and Provenance of this association is NCBI PubMed.",
      context_with_edge:
        "Disease Bardet-Biedl syndrome resembles Disease chronic kidney disease and Provenance of this association is NCBI PubMed and attributes associated with this association is in the following JSON format:\n {'enrichment': 2.769900592315755, 'source': 'NCBI PubMed', 'cooccur': 12, 'fisher': 0.001700540919040838, 'odds': 2.801845359713585}\n\n",
    },
    {
      source: 146415,
      source_type: "Disease",
      source_name: "Bardet-Biedl syndrome",
      edge_type: "RESEMBLES_DrD",
      target: 146174,
      target_type: "Disease",
      target_name: "uterine disease",
      provenance: "NCBI PubMed",
      evidence: {
        enrichment: 11.229002614942202,
        source: "NCBI PubMed",
        cooccur: 5,
        fisher: 0.0000995330836334963,
        odds: 11.311218757303777,
      },
      predicate: "RESEMBLES",
      context:
        "Disease Bardet-Biedl syndrome resembles Disease uterine disease and Provenance of this association is NCBI PubMed.",
      context_with_edge:
        "Disease Bardet-Biedl syndrome resembles Disease uterine disease and Provenance of this association is NCBI PubMed and attributes associated with this association is in the following JSON format:\n {'enrichment': 11.229002614942202, 'source': 'NCBI PubMed', 'cooccur': 5, 'fisher': 9.95330836334963e-05, 'odds': 11.311218757303777}\n\n",
    },
    {
      source: 146415,
      source_type: "Disease",
      source_name: "Bardet-Biedl syndrome",
      edge_type: "RESEMBLES_DrD",
      target: 148639,
      target_type: "Disease",
      target_name: "cystic kidney disease",
      provenance: "NCBI PubMed",
      evidence: {
        enrichment: 11.016013791149106,
        source: "NCBI PubMed",
        cooccur: 3,
        fisher: 0.002737051113701312,
        odds: 11.066696730338359,
      },
      predicate: "RESEMBLES",
      context:
        "Disease Bardet-Biedl syndrome resembles Disease cystic kidney disease and Provenance of this association is NCBI PubMed.",
      context_with_edge:
        "Disease Bardet-Biedl syndrome resembles Disease cystic kidney disease and Provenance of this association is NCBI PubMed and attributes associated with this association is in the following JSON format:\n {'enrichment': 11.016013791149106, 'source': 'NCBI PubMed', 'cooccur': 3, 'fisher': 0.002737051113701312, 'odds': 11.066696730338359}\n\n",
    },
    {
      source: 146415,
      source_type: "Disease",
      source_name: "Bardet-Biedl syndrome",
      edge_type: "RESEMBLES_DrD",
      target: 145440,
      target_type: "Disease",
      target_name: "obesity",
      provenance: "NCBI PubMed",
      evidence: {
        enrichment: 3.7640495122824147,
        source: "NCBI PubMed",
        cooccur: 31,
        fisher: 7.218832804481803e-10,
        odds: 3.8961074751115143,
      },
      predicate: "RESEMBLES",
      context:
        "Disease Bardet-Biedl syndrome resembles Disease obesity and Provenance of this association is NCBI PubMed.",
      context_with_edge:
        "Disease Bardet-Biedl syndrome resembles Disease obesity and Provenance of this association is NCBI PubMed and attributes associated with this association is in the following JSON format:\n {'enrichment': 3.7640495122824147, 'source': 'NCBI PubMed', 'cooccur': 31, 'fisher': 7.218832804481803e-10, 'odds': 3.8961074751115143}\n\n",
    },
    {
      source: 146415,
      source_type: "Disease",
      source_name: "Bardet-Biedl syndrome",
      edge_type: "PRESENTS_DpS",
      target: 24040,
      target_type: "Symptom",
      target_name: "Sensation Disorders",
      provenance: "NCBI PubMed",
      evidence: {
        enrichment: 16.2185055516655,
        sources: ["NCBI PubMed"],
        cooccur: 2,
        fisher: 0.00691163052146591,
        odds: 16.722077546296298,
      },
      predicate: "PRESENTS",
      context:
        "Disease Bardet-Biedl syndrome presents Symptom Sensation Disorders and Provenance of this association is NCBI PubMed.",
      context_with_edge:
        "Disease Bardet-Biedl syndrome presents Symptom Sensation Disorders and Provenance of this association is NCBI PubMed and attributes associated with this association is in the following JSON format:\n {'enrichment': 16.2185055516655, 'sources': ['NCBI PubMed'], 'cooccur': 2, 'fisher': 0.00691163052146591, 'odds': 16.722077546296298}\n\n",
    },
    {
      source: 146415,
      source_type: "Disease",
      source_name: "Bardet-Biedl syndrome",
      edge_type: "PRESENTS_DpS",
      target: 23857,
      target_type: "Symptom",
      target_name: "Olfaction Disorders",
      provenance: "NCBI PubMed",
      evidence: {
        enrichment: 19.781174891722074,
        sources: ["NCBI PubMed"],
        cooccur: 4,
        fisher: 0.00005438230980241994,
        odds: 21.044518808838657,
      },
      predicate: "PRESENTS",
      context:
        "Disease Bardet-Biedl syndrome presents Symptom Olfaction Disorders and Provenance of this association is NCBI PubMed.",
      context_with_edge:
        "Disease Bardet-Biedl syndrome presents Symptom Olfaction Disorders and Provenance of this association is NCBI PubMed and attributes associated with this association is in the following JSON format:\n {'enrichment': 19.781174891722074, 'sources': ['NCBI PubMed'], 'cooccur': 4, 'fisher': 5.438230980241994e-05, 'odds': 21.044518808838657}\n\n",
    },
    {
      source: 146415,
      source_type: "Disease",
      source_name: "Bardet-Biedl syndrome",
      edge_type: "PRESENTS_DpS",
      target: 24203,
      target_type: "Symptom",
      target_name: "Pediatric Obesity",
      provenance: "NCBI PubMed",
      evidence: {
        enrichment: 27.848234572445097,
        sources: ["NCBI PubMed"],
        cooccur: 7,
        fisher: 7.353255261423536e-9,
        odds: 31.155872431431344,
      },
      predicate: "PRESENTS",
      context:
        "Disease Bardet-Biedl syndrome presents Symptom Pediatric Obesity and Provenance of this association is NCBI PubMed.",
      context_with_edge:
        "Disease Bardet-Biedl syndrome presents Symptom Pediatric Obesity and Provenance of this association is NCBI PubMed and attributes associated with this association is in the following JSON format:\n {'enrichment': 27.848234572445097, 'sources': ['NCBI PubMed'], 'cooccur': 7, 'fisher': 7.353255261423536e-09, 'odds': 31.155872431431344}\n\n",
    },
    {
      source: 146415,
      source_type: "Disease",
      source_name: "Bardet-Biedl syndrome",
      edge_type: "PRESENTS_DpS",
      target: 24152,
      target_type: "Symptom",
      target_name: "Usher Syndromes",
      provenance: "NCBI PubMed",
      evidence: {
        enrichment: 40.167570915397,
        sources: ["NCBI PubMed"],
        cooccur: 2,
        fisher: 0.0011801634538821382,
        odds: 41.541554478549635,
      },
      predicate: "PRESENTS",
      context:
        "Disease Bardet-Biedl syndrome presents Symptom Usher Syndromes and Provenance of this association is NCBI PubMed.",
      context_with_edge:
        "Disease Bardet-Biedl syndrome presents Symptom Usher Syndromes and Provenance of this association is NCBI PubMed and attributes associated with this association is in the following JSON format:\n {'enrichment': 40.167570915397, 'sources': ['NCBI PubMed'], 'cooccur': 2, 'fisher': 0.0011801634538821382, 'odds': 41.541554478549635}\n\n",
    },
  ],
};