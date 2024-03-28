import localFont from "next/font/local";

const localFontPlantin = localFont(
  {
    variable: "--fontfamily-primary",
    src: [
      {
        path: "../public/fonts/PlantinMTProRg.TTF",
        weight: "normal",
        style: "normal",
      },
    ],
  }
);

export function FontDecorator(Story: any) {
  console.log("localFontPlantin", localFontPlantin);
  return (
    <div className={`${localFontPlantin?.variable}`}>
      <Story/>
    </div>
  );
}
