export const getModelName = (model: string) => {
  switch (model) {
    case "chatgpt":
      return "Chat GPT";
    case "tensorflow":
      return "Tensorflow";
    case "bard":
      return "Bard";
    default:
      return "Chat GPT";
  }
};
