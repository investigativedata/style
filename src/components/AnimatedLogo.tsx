import { Player } from "@lottiefiles/react-lottie-player";

export default function AnimatedLogo({ href = "/" }: { href?: string }) {
  const src =
    "https://cdn.investigativedata.org/style/logos/logo_animation.json";
  return (
    <a href={href}>
      <Player
        autoplay
        loop
        src={src}
        style={{ height: "3.125rem", width: "auto" }}
      ></Player>
    </a>
  );
}
