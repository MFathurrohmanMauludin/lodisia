import { Button, Link } from "@nextui-org/react"

const SkipToContent = () => {
    return (
        <>
            <Button
                className="absolute z-10 -translate-y-10 translate-x-40 focus-within:translate-y-4 transition-all ease-in duration-300 font-semibold"
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