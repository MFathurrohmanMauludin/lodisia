import { Button, Link } from "@nextui-org/react"

const SkipToContent = () => {
    return (
        <>
            <Button
                className="absolute z-50 -translate-y-40 translate-x-40 focus-within:translate-y-0 transition-all ease-in duration-300 font-semibold"
                href="#main-content"
                as={Link}
                color="primary"
                variant="solid"
                radius="full"
            >
                Skip To Content
            </Button>
        </>
    )
}

export default SkipToContent