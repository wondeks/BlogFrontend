import { IKContext } from "imagekitio-react";

const ImageKitProvider = ({ children }) => {
  return (
    <IKContext
      urlEndpoint="https://ik.imagekit.io/v0jopklyg"            // Or use your env var here
      publicKey="public_ETCIQzPQiRhu5Bg7Uw1S2wN3eoc="          // Or from env var
      authenticator={async () => {
        // Your authenticator function here or import it
      }}
    >
      {children}
    </IKContext>
  );
};

export default ImageKitProvider;
