// components/ui/avatar.js
export function Avatar({ src, alt }) {
    return (
      <img
        className="rounded-full w-32 h-32 mx-auto"
        src={src}
        alt={alt}
      />
    );
  }
  