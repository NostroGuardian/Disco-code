import { useRouter } from "next/router";
import AnimationContainerForCards from "./AnimationContainers/AnimationContainerForCards";
import s from "./Articles.module.css";
import Card from "./Card/Card";
const Articles = () => {
  const router = useRouter();
  console.log(router);

  return (
    <div className={s.articles}>
      <AnimationContainerForCards>

        <Card title={"JavaScript"} text={"Узнаем о базовом javaScript. Изучим более продвинутые темы. Немного взглянем на алгоритмы и коснемся раных тем"} color={"js"} url={"/js"} />

      </AnimationContainerForCards>

      <AnimationContainerForCards>

        <Card title={"React"} text={"Как создать приложение на react. Что такое JSX, хуки, состояние, компонент. Зачем нужен react и какие проблемы он решает"} color={"react"} url={"/react"} />

      </AnimationContainerForCards>

      <AnimationContainerForCards>

        <Card title={"TypeScript"} text={"Делаем из javaScript очень серьезного парня, с которым лучше не шутить"} color={"ts"} url={"/ts"} />

      </AnimationContainerForCards>
      
      <AnimationContainerForCards>

        <Card title={"Next.js"} text={"Я клоун"} color={"next"} url={"/next"} />
        
      </AnimationContainerForCards>
    </div>
  );
};

export default Articles;
