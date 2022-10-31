import styles from "./imgForm.module.scss";
import down from "../../../assets/lcon/down.png";
import { thumbnailConfig } from "../../../shared/utils/s3Config";
import { PropsType, ThumbImgType } from "./imgForm.type";
import { useMemo, useRef, useState } from "react";
import ReactS3Client from "react-aws-s3-typescript";

const ImgForm = ({
  thumb1Url,
  thumb2Url,
  setThumb1Url,
  setThumb2Url,
}: PropsType) => {
  const thumb1Ref = useRef<HTMLInputElement>(null);
  const thumb2Ref = useRef<HTMLInputElement>(null);
  const [thumb1, setThumb1] = useState<ThumbImgType | null>(null);
  const [thumb2, setThumb2] = useState<ThumbImgType | null>(null);

  const handleClickThumb1 = () => {
    thumb1Ref.current?.click();
  };

  const handleClickThumb2 = () => {
    thumb2Ref.current?.click();
  };

  const uploadThumb1 = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const s3 = new ReactS3Client(thumbnailConfig);
    const fileList = e.target.files;
    const fileLength = fileList?.length;
    if (fileLength && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);
      setThumb1({
        file: fileList[0],
        fileName: fileList[0].name,
        thumbnail: url,
        type: fileList[0].type.slice(0, 5),
      });
      try {
        const res = await s3
          .uploadFile(fileList[0], fileList[0].name)
          .then((data) => {
            setThumb1Url(data.location);
          });
      } catch (err) {
        console.error(err);
      }
    }
  };

  const uploadThumb2 = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const s3 = new ReactS3Client(thumbnailConfig);
    const fileList = e.target.files;
    const fileLength = fileList?.length;
    if (fileLength && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);
      setThumb2({
        file: fileList[0],
        fileName: fileList[0].name,
        thumbnail: url,
        type: fileList[0].type.slice(0, 5),
      });
      try {
        const res = await s3
          .uploadFile(fileList[0], fileList[0].name)
          .then((data) => {
            setThumb2Url(data.location);
          });
      } catch (err) {
        console.error(err);
      }
    }
  };

  const showThumb1 = useMemo(() => {
    if (thumb1 == null) {
      return <img src={thumb1Url ? thumb1Url : down} />;
    }
    if (thumb1) {
      return <img src={thumb1.thumbnail} />;
    }
  }, [thumb1, thumb1Url]);

  const showThumb2 = useMemo(() => {
    if (thumb2 == null) {
      return <img src={thumb2Url ? thumb2Url : down} />;
    }
    if (thumb2) {
      return <img src={thumb2.thumbnail} />;
    }
  }, [thumb2, thumb1Url]);

  return (
    <div className={styles.imgDiv}>
      <div className={styles.imgBox} onClick={() => handleClickThumb1()}>
        {showThumb1}
        <input
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          ref={thumb1Ref}
          onChange={uploadThumb1}
        />
      </div>
      <div className={styles.imgBox} onClick={() => handleClickThumb2()}>
        {showThumb2}
        <input
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          ref={thumb2Ref}
          onChange={uploadThumb2}
        />
      </div>
    </div>
  );
};

export default ImgForm;
