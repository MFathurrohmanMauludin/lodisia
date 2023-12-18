/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tabs, Tab, Input, Button, Link } from "@nextui-org/react"
import { useState } from "react";

const LoginSignupForm = () => {
    const [selected, setSelected] = useState("login");

    return (
        <>
            <div className="flex flex-col w-full">
                <Tabs
                    fullWidth
                    size="md"
                    variant="solid"
                    aria-label="Tabs form"
                    selectedKey={selected}
                    onSelectionChange={(data: any) => setSelected(data)}
                >
                    {/* login */}
                    <Tab key="login" title="Login">
                        <form className="flex flex-col gap-4">
                            <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                            <Input
                                isRequired
                                label="Password"
                                placeholder="Enter your password"
                                type="password"
                            />
                            <p className="text-center text-small">
                                Need to create an account?{" "}
                                <Link size="sm" onPress={() => setSelected("sign-up")}>
                                    Sign up
                                </Link>
                            </p>
                            <div className="flex gap-2 justify-end">
                                <Button fullWidth color="primary">
                                    Login
                                </Button>
                            </div>
                        </form>
                    </Tab>

                    {/* signup */}
                    <Tab key="sign-up" title="Sign up">
                        <form className="flex flex-col gap-4 h-[300px]">
                            <Input isRequired label="Name" placeholder="Enter your name" type="password" />
                            <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                            <Input
                                isRequired
                                label="Password"
                                placeholder="Enter your password"
                                type="password"
                            />
                            <p className="text-center text-small">
                                Already have an account?{" "}
                                <Link size="sm" onPress={() => setSelected("login")}>
                                    Login
                                </Link>
                            </p>
                            <div className="flex gap-2 justify-end">
                                <Button fullWidth color="primary">
                                    Sign up
                                </Button>
                            </div>
                        </form>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default LoginSignupForm