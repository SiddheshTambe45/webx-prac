import { createReadStream, createWriteStream } from "fs";

const ReadStream = createReadStream("./input.txt");
const WriteStream = createWriteStream("./output.txt");

ReadStream.on("data", (chunk) => {
  const buffer = Buffer.from(chunk);
  console.log("Buffer: ", buffer);
  WriteStream.write(buffer);

  //  WriteStream.write(chunk);
  //  console.log("Buffer: ", chunk.toString("utf-8"));
});

ReadStream.on("end", () => {
  console.log("Write Stream ended");
  WriteStream.end();
});

WriteStream.on("finish", () => {
  console.log("Read Stream ended");
  ReadStream.close?.();
});

WriteStream.on("error", (err) => console.log("Write Error: ", err.message));

ReadStream.on("error", (err) => console.log("Read Error: ", err.message));
