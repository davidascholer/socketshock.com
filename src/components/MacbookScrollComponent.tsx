import { MacbookScroll } from "./ui/MacbookScroll";

export default function MacbookScrollComponent() {
  return (
    <div className="overflow-hidden max-[350px]:my-[-400px] max-[450px]:my-[-200px] my-10">
      <MacbookScroll
        title={
          <span className="text-4xl font-semibold mb-2 text-center p-2 text-white">
            Need more than a web app? No problem! We do native mobile apps as
            well as IoT.
          </span>
        }
        src={`/images/macbookscreen.webp`}
        showGradient={false}
      />
    </div>
  );
}
