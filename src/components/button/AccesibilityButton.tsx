/* eslint-disable @typescript-eslint/no-explicit-any */
import * as regular from "@fortawesome/free-regular-svg-icons"
import * as solid from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";

interface Props {
  id: number;
  name: string;
  icon: any;
}

const AccesibileButton = (getData: Props) => {
  const regularIcon: any = regular;
  const solidIcon: any = solid;

  return (
    <>
      <Button
        className="py-[38px] px-3 border-1"
        color="default"
        variant="bordered"
        size="md"
        onPress={() => console.log('1')}
        radius="sm"
        aria-label="tombol buta warna">
        <div className="flex flex-col items-center gap-y-3">
          <FontAwesomeIcon
            fontSize={24}
            icon={getData.icon === 'faEye' ? regularIcon['faEye'] : solidIcon[getData.icon]}
            aria-label="ikon buta warna" />
          <span className="text-tiny capitalize leading-none">{getData.name}</span>
        </div>
      </Button>
    </>
  )
}

export default AccesibileButton