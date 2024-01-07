import { Button, ScrollShadow, Textarea } from "@nextui-org/react"
import CardComment from "../card-comment/CommentCard"
import { useState, KeyboardEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const CommentPost = () => {
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
        className="h-[300px] p-3"
        offset={400}
      >
        <div className="space-y-3">
          <CardComment />
          <CardComment />
          <CardComment />
        </div>
      </ScrollShadow>

      {/* comment column */}
      <div className="space-y-3">
        <Textarea
          color="default"
          placeholder="Tambahkan komentar"
          radius="sm"
          maxRows={3}
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