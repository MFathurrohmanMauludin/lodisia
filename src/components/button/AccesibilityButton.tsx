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
        id={`${getData.id}`}
        className="py-[38px] px-3 border-1"
        color="default"
        variant="bordered"
        size="md"
        onPress={() => console.log('1')}
        radius="sm"
        aria-label={getData.name}>
        <div className="flex flex-col items-center gap-y-2">
          <FontAwesomeIcon
            fontSize={24}
            icon={getData.icon === 'faEye' ? regularIcon['faEye'] : solidIcon[getData.icon]}
            aria-label="ikon buta warna" />
          {
            getData.name === 'buta total' || getData.name === 'buta warna' ? (
              <span className="text-tiny capitalize leading-0">{getData.name}</span>
            ) :
              (
                <div className="flex flex-col">
                  <span className="text-tiny capitalize leading-0">{getData.name}</span>
                  <span className="text-[8px] leading-none">coming soon</span>
                </div>
              )
          }
        </div>
      </Button>
    </>
  )
}

export default AccesibileButton