import styles from "./editor.module.scss";
import { useRef, useMemo, useCallback } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ReactS3Client from "react-aws-s3-typescript";
import { productImgConfig } from "../../../shared/utils/s3Config";
import { PropsType } from "./editor.type";

const Editor = ({ contents, setContents }: PropsType) => {
  const QuillRef = useRef<ReactQuill>();
  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.setAttribute("name", "image");
    input.click();
    input.onchange = async () => {
      const s3 = new ReactS3Client(productImgConfig);
      const file = input.files[0];
      if (file !== null) {
        try {
          const res = await s3.uploadFile(file, file.name).then((data) => {
            const ImgUrl = data.location;
            const quill = QuillRef.current.getEditor();
            const range = quill.getSelection()?.index;
            if (typeof range !== "number") return;
            quill.setSelection(range, 1);
            quill.clipboard.dangerouslyPasteHTML(
              range,
              `<img src=${ImgUrl} alt="image" />`
            );
          });
        } catch (error) {
          alert("이미지 업로드에 실패했습니다.");
        }
      }
    };
  }, [QuillRef]);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ size: ["small", false, "large", "huge"] }, { color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
          ["image"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    [imageHandler]
  );

  return (
    <div>
      <ReactQuill
        className={styles.reactQuill}
        ref={(element) => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        value={contents}
        onChange={setContents}
        modules={modules}
        theme="snow"
        placeholder="내용을 입력해주세요."
      />
    </div>
  );
};

export default Editor;
