const DYNAMIC_IMAGE_HOST = "https://my-og-image-thanks-to-vercel.vercel.app"; //no slash
const LOGO_URL = "https://telegra.ph/file/7687f4eb79b81db106765.jpg";

export default function metadataImage(text, fontsize) {
    if (!fontsize) fontsize = 50;
    return `${DYNAMIC_IMAGE_HOST}/${text}.png?theme=light&md=1&fontSize=${fontsize}px&widths=800&heights=350&images=${LOGO_URL}`;
}
