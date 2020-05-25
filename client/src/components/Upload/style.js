import styled from "styled-components";
import Button from "../Button";

export const UploadWrapper = styled.div`
  max-width: 680px;
  padding: 120px 15px 0 15px;
  margin: 0 auto;
  h5 {
    font-size: 32px;
    text-align: center;
    margin: 0;

    ::after {
      content: "";
      width: 80px;
      height: 2px;
      background: ${(props) => props.theme.primaryColor};
      display: block;
      margin: 40px auto;
    }
  }

  div,
  img {
    margin-bottom: 24px;
  }

  .form {
    border-color: #e9ecf3;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #e9ecf3;
    border-radius: 0.25rem;
  }
`;

export const File = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .sortable {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  .delete {
    position: absolute;
    top: -12px;
    right: -7px;
    font-size: 1rem;
    padding: 5px 8px;
    cursor: pointer;
    border-radius: 50%;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
  }

  img {
    margin-left: 10px;
    src: ${(props) => props.children.props};
    width: 150px;
    object-fit: cover;
    height: 150px;
    border: 1px solid #e8ecf3;
  }
`;

export const UploadBtn = styled(Button)`
  display: block;
  width: 130px;
  height: 40px;
  margin: 80px auto;
  cursor: pointer;
`;

export const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.8rem;
  margin-top: 1rem;
`;
