/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, ScrollShadow, Textarea } from "@nextui-org/react"
import CommentCard from "../card-comment/CommentCard"
import { useState, KeyboardEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

interface Props {
  data: any;
}

const CommentPost = (getComment: Props) => {
  const [textareaValue, setTextareaValue] = useState('');
  const temp: string[] = [];

  const handleButtonClick = () => {
    if (temp.push(textareaValue)) setTextareaValue('')
    console.log(temp);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    console.log(temp);
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default behavior (e.g., submitting a form)
      if (temp.push(textareaValue)) setTextareaValue('')
    }
  };

  return (
    <>
      {/* comments */}
      <ScrollShadow
        className="md:h-[200px] h-[300px] p-3"
        isEnabled={false}

      >
        <div className="flex flex-col gap-3">
          {
            getComment.data.map((comment: any) =>
              <CommentCard
                id={comment.id}
                imgUrl={comment.imgUrl}
                name={comment.name}
                content={comment.content}
                likes={comment.likes}
                createdAt={comment.createdAt}
              />
            )
          }
        </div>
      </ScrollShadow>

      {/* comment column */}
      <div className="space-y-3">
        <Textarea
          color="default"
          placeholder="Tambahkan komentar"
          radius="sm"
          maxRows={2}
          value={textareaValue}
          onValueChange={setTextareaValue}
        />
        {
          textareaValue.length >= 1 ?
            <div
              className="flex justify-end gap-x-2">
              <Button
                onClick={() => setTextareaValue('')}
                variant="light"
                color="danger"
                size="sm"
                radius="full"
                onKeyDown={(e: KeyboardEvent) => {
                  if (e.key === 'Enter') {
                    setTextareaValue('');
                  }
                }}
              >
                Reset
              </Button>

              <Button
                onClick={handleButtonClick}
                onKeyDown={handleKeyDown}
                variant="solid"
                color="primary"
                size="sm"
                radius="full"
                startContent={<FontAwesomeIcon icon={faPaperPlane} />}
              >
                Kirim
              </Button>
            </div>
            :
            <></>
        }

      </div >
    </>
  )
}

export default CommentPost