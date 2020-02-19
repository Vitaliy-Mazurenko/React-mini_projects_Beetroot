/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";

const Article = () => {
  const on = false;
  return (
    <ul
      className="list-group"
      css={{
        border: "2px dotted navy",
        padding: "1rem 2rem",
        backgroundColor: `${on ? "black" : "white"}`,
        color: `${on ? "white" : "black"}`,
      }}
    >
      <li>
        Например необходимо сделать переключение стилей для данной статьи
        <br />
        State находится в переключателе Toggle.jsx и надо каким то образом
        расшарить его между компонентами
        <br /> Это конечно можно сделать если
        <ul>
          <li>Перенести state в компонент example1/index.jsx</li>
          <li>написать свой hook useToggle</li>
        </ul>
      </li>
      <li>Сделаем это с использованием библиотеки Recoil</li>
    </ul>
  );
};

export default Article;
