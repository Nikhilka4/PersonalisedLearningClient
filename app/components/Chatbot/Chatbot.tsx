import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import {
  Goal,
  Lightbulb,
  BotMessageSquare,
  Upload,
  Send,
  Copy,
  Download,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const Chatbot = () => {
  // state for the prompt, response and output
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [output, setOutput] = useState("The response will appear here...");

  const onKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit();
    }
  };

  const onFileChange = (e: any) => {
    const file = e.target.files[0];
    if (!file) {
      toast.error("No file selected!");
      return;
    }
    if (!file.type.includes("text")) {
      toast.error("File type not supported!");
      return;
    }
    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = (readerEvent) => {
      setPrompt((readerEvent.target?.result as string) || "done");
    };
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    toast.success("Copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([output], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "chat.txt";
    anchor.click();
    anchor.remove();
    window.URL.revokeObjectURL(url);
  };

  const onSubmit = async () => {
    if (prompt === "") {
      toast.error("Prompt cannot be empty!");
      return;
    }
    setOutput("The response will appear here...");
    const response = await fetch("api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userPrompt: prompt,
      }),
    });
    const data = await response.json();
    setResponse(data.text);
  };

  useEffect(() => {
    if (response.length === 0) return;
    setOutput("");
    for (let i = 0; i < response.length; i++) {
      setTimeout(() => {
        setOutput((prev) => prev + response[i]);
      }, i * 10);
    }
  }, [response]);

  return (
    <main className="flex flex-col items-center min-h-screen gap-4">
      <Toaster />
      <div className="flex gap-2 items-center mb-5 text-black dark:text-white">
        <BotMessageSquare size="64" />
        <span className="text-3xl font-bold">ChitChat</span>
      </div>
      <div className="flex gap-2 items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="prompt"
            value={prompt}
            className="min-w-[320px] sm:min-w-[400px] md:min-w-[500px] h-[50px] pl-5 pr-12 rounded-lg bg-slate-100 text-black"
            onChange={(e) => {
              setPrompt(e.target.value);
            }}
            onKeyDown={(e) => onKeyDown(e)}
          />
          <button
            onClick={() => onSubmit()}
            className="absolute top-3 right-3 hover:scale-110 transition ease-in-out text-black"
          >
            <Send />
          </button>
        </div>
        <input
          type="file"
          onChange={(e) => onFileChange(e)}
          className="hidden"
        />
        <button
          className="w-[40px] p-1 border border-gray-300 rounded"
          onClick={() => {
            const fileInput = document.querySelector(
              "input[type=file]"
            ) as HTMLInputElement;
            fileInput.click();
          }}
        >
          <Upload className="w-[20px] ml-[6px] text-black dark:text-white" />
        </button>
      </div>
      <div className="flex gap-3 items-center">
        <div className="p-5 border-2 border-black dark:border-white whitespace-normal min-w-[320px] sm:w-[500px] md:min-w-[600px] min-h-[150px] max-h-[400px] lg:min-w-[700px] overflow-y-scroll rounded">
          <div className="w-full h-full ">
            <Markdown className="text-black dark:text-white ">{`${output}`}</Markdown>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <button
            className="w-[40px] p-1 border border-gray-300 rounded"
            onClick={() => copyToClipboard()}
          >
            <Copy className="w-[20px] ml-[5px] text-black dark:text-white" />
          </button>
          <button
            className="w-[40px] p-1 border border-gray-300 rounded"
            onClick={() => downloadFile()}
          >
            <Download className="w-[20px] ml-[5px] text-black dark:text-white" />
          </button>
        </div>
      </div>
      <div className="min-h-[30vh] w-full border-2 border-black dark:border-white my-5 rounded-2xl text-black dark:text-white">
        <div className="flex">
          <Lightbulb className="mt-5 ml-5 text-yellow-500" />
          <span className="mt-5 ml-2 font-[500] text-[18px] underline">
            Guide to Use Our ChitChat Bot :
          </span>
        </div>
        <div className="mt-3 ml-5">
          <div className="flex mt-3">
            <Goal className="text-blue-500"/>
            <p className="ml-2 text-[18px]">
              You can use our chitchat bot to create your own personalized study
              plan by using a prompt,(For example:&quot;How do i cover entire
              javascript in a month studing 2 hours per day&quot;){" "}
            </p>
          </div>
          <div className="flex mt-3">
            <Goal className="text-blue-500"/>
            <p className="ml-2 text-[18px]">
              You can share any doubt you in the courses you are watching here by typing it in the prompt input {" "}
            </p>
          </div>
          <div className="flex mt-3">
            <Goal className="text-blue-500"/>
            <p className="ml-2 text-[18px]">
              You can also upload a &quot;.txt&quot; file directly using the upload button {" "}
            </p>
          </div>
          <div className="flex mt-3">
            <Goal className="text-blue-500"/>
            <p className="ml-2 text-[18px]">
              You can copy the response to your clipboard by clicking the copy button{" "}
            </p>
          </div>
          <div className="flex my-3 ">
            <Goal className="text-blue-500"/>
            <p className="ml-2 text-[18px]">
              You can also download the response in the form of &quot;.txt&quot; file by clicking the download button{" "}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Chatbot;
