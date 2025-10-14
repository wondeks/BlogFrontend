import { IKContext, IKUpload } from "imagekitio-react";
import { useRef } from "react";
import { toast } from "react-toastify";

const authenticator = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts/upload-auth`
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

interface UploadProps {
  children: React.ReactNode;
  type: string;
  setProgress: (progress: number) => void;
  setData: (data: any) => void;
}

const Upload: React.FC<UploadProps> = ({ children, type, setProgress, setData }) => {
  const ref = useRef<HTMLInputElement>(null);

  const onError = (err: any) => {
    console.error(err);
    toast.error("Image upload failed!");
  };

  const onSuccess = (res: any) => {
    console.log(res);
    setData(res);
  };

  const onUploadProgress = (progress: { loaded: number; total: number }) => {
    const percentage = Math.round((progress.loaded / progress.total) * 100);
    console.log("Upload progress:", percentage);
    setProgress(percentage);
  };

  // Debug logs
  console.log("ImageKit publicKey:", process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY);
  console.log("ImageKit urlEndpoint:", process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT);

  return (
    <IKContext
      publicKey={process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!}
      urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!}
      authenticator={authenticator}
    >
      <IKUpload
        useUniqueFileName
        onError={onError}
        onSuccess={onSuccess}
        onUploadProgress={onUploadProgress}
        className="hidden"
        ref={ref}
        accept={`${type}/*`}
      />
      <div className="cursor-pointer" onClick={() => ref.current?.click()}>
        {children}
      </div>
    </IKContext>
  );
};

export default Upload;
