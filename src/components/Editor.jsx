import React from "react";
import styled from "styled-components";
import { RedBackgroundHeading } from "./reusables/Styles";

const Editor = ({
  content,
  editorRef,
  onChange,
  changeToHeading,
  changeToPara,
  setContent,
}) => {
  return (
    <div>
      <ActionButtons>
        <ChangeText onClick={changeToHeading}>Change to Heading</ChangeText>
        <ChangeText onClick={changeToPara}>Change to Paragraph</ChangeText>
      </ActionButtons>
      <RedBackgroundHeading>About Mimidas Tire & Auto</RedBackgroundHeading>
      <div
        contentEditable={true}
        onBlur={(e) => onChange(e)}
        dangerouslySetInnerHTML={{ __html: content }}
        style={edittableStyles}
        ref={editorRef}
        onInput={(e) => {
          if (content === "") {
            setContent(
              `<p class="about-page-para-text">${e.target.textContent}</p>`
            );
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            const selection = window.getSelection();
            // console.log(selection);
            const range = selection.getRangeAt(0);
            // console.log(range);
            const newParagraph = document.createElement("p");
            newParagraph.className = "about-page-para-text";
            newParagraph.innerHTML = "<br>";
            // Insert the new paragraph after the current block element
            range.insertNode(newParagraph);
            range.setStartAfter(newParagraph.firstChild);
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);
          }
        }}
      ></div>
      <textarea
        style={{ width: "100%", height: "400px", border: "2px solid black" }}
        className="abcd about-page-heading-text"
      ></textarea>
    </div>
  );
};

const ChangeText = styled.button`
  padding: 1rem;
  white-space: no-wrap;
  background: var(--primary-color);
  border: none;
  outline: none;
  cursor: pointer;
  color: var(--white);
  transition: 0.4s ease;

  &:hover {
    opacity: 0.6;
  }
`;

const ActionButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  gap: 0.5rem;
  border: 1px solid black;
  border-bottom: none;
  padding: 0.2rem;
`;

const edittableStyles = {
  padding: "1rem",
  //   outline: "-webkit-focus-ring-color auto 1px",
  marginBottom: "1rem",
  border: "1px solid black",
};
export default Editor;
