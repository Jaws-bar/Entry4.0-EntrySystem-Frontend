import React, { FC, useState, useEffect } from "react";

import * as S from "../../../styles/default/popup";
import {
  mapStateToProps,
  mapDispatchToProps
} from "../../../container/default/popup/writeNewPassword";
import { passwordRegular } from "../../../lib/regularExpressions";

interface OwnProps {
  userVerify: string;
  actionPressEnter: (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    handleEvent: () => void
  ) => void;
  updatePopUpCase(popUpCase: "default" | "login" | "set" | "check"): void;
}

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  OwnProps;

const WriteNewPassword: FC<Props> = ({
  isError,
  isSuccess,
  isWaiting,
  userVerify,
  resetApplicantPassword,
  updatePopUpCase,
  actionPressEnter,
  resetState
}) => {
  const [isReWritePassword, setIsReWritePassword] = useState(false);
  const [isQuestionBox, setIsQuestionBox] = useState(false);
  const [isCheckRegular, setIsCheckRegular] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [newRePassword, setNewRePassword] = useState("");

  useEffect(() => {
    if (isSuccess) {
      updatePopUpCase("check");
      resetState();
    }
  });

  const checkWritingPasswordCase: () => void = isReWritePassword
    ? () =>
        newRePassword === newPassword || newRePassword === ""
          ? resetApplicantPassword({
            password: newRePassword,
            verify: userVerify
          })
          : setIsCheckRegular(true)
    : () => (setIsReWritePassword(true), () => setIsCheckRegular(false));

  return (
    <>
      <S.ElementCover>
        {isReWritePassword ? (
          <S.Text titleText>
            {isCheckRegular
              ? "비밀번호가 정확하지 않습니다."
              : "변경 할 비밀번호를 한번 더 입력해주세요"}
          </S.Text>
        ) : (
          <S.Text titleText>
            {isCheckRegular
              ? "비밀번호 생성규칙을 확인해주세요"
              : "변경 할 비밀번호를 입력해주세요"}
          </S.Text>
        )}
      </S.ElementCover>

      <S.InputCover>
        <S.InputBox
          onKeyPress={
            passwordRegular.test(newPassword)
              ? e => actionPressEnter(e, checkWritingPasswordCase)
              : e => actionPressEnter(e, () => setIsCheckRegular(true))
          }
          onChange={({ target: { value } }) =>
            isReWritePassword ? setNewRePassword(value) : setNewPassword(value)
          }
          value={isReWritePassword ? newRePassword : newPassword}
          type="password"
          placeholder={isReWritePassword ? "비밀번호 확인" : "비밀번호"}
        />
      </S.InputCover>

      <S.ButtonCover>
        <S.Button
          onClick={
            passwordRegular.test(newPassword)
              ? checkWritingPasswordCase
              : () => setIsCheckRegular(true)
          }
        >
          확인
        </S.Button>
      </S.ButtonCover>

      <S.PeculiarCover question>
        <S.PeculiarText onClick={() => setIsQuestionBox(!isQuestionBox)}>
          변경 할 비밀번호를 입력해주세요
        </S.PeculiarText>
      </S.PeculiarCover>

      {isQuestionBox && (
        <S.QuestionBox smallBox>
          <S.Text question>
            영문(대소문자 구분), 숫자 포함 8자리 이상 특수기호 가능
          </S.Text>
        </S.QuestionBox>
      )}
    </>
  );
};

export default WriteNewPassword;
