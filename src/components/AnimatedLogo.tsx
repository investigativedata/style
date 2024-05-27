import { Player } from "@lottiefiles/react-lottie-player";

export default function AnimatedLogo() {
  const src =
    "https://cdn.investigativedata.org/style/logos/logo_animation.json";
  return (
    <Player
      autoplay
      loop
      src={src}
      style={{ height: "3.125rem", width: "auto" }}
    ></Player>
  );
}
