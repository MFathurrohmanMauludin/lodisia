import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

const DropDown = () => {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    className="hover:!bg-slate-50 !px-0 !m-0 text-[16px] rounded-none"
                    variant="light"
                    color="default"
                    size="md"
                >
                    Pekerjaan
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">Jenis Pekerjaan</DropdownItem>
                <DropdownItem key="copy">Level Pekerjaan</DropdownItem>
                <DropdownItem key="edit">Bidang Pekerjaan</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default DropDown;
