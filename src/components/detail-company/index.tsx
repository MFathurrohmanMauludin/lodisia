import { Tabs, Tab, Card, CardBody, Button, Link } from '@nextui-org/react';

const InfoCompany = () => {
    return (
        <>
            <div className="flex w-full flex-col">
                <Tabs key={'color'} color='primary' size='md' aria-label="Options" radius='full'>
                    {/* about company section */}
                    <Tab key="about" title="About">
                        <Card radius='sm'>
                            <CardBody tabIndex={0}>
                                <span className="font-medium text-[28px] tracking-wide">Overview</span>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, exercitationem.</p>
                                <div className="flex flex-row flex-wrap gap-x-16 gap-y-4 mt-4">
                                    <div className="flex flex-col gap-x-3">
                                        <span className="font-semibold">Company Website</span>
                                        <Button
                                            href="https://www.tokopedia.com"
                                            as={Link}
                                            variant="light"
                                            color="success"
                                            showAnchorIcon
                                            size="sm"
                                            isExternal>
                                            PT Tokopedia
                                        </Button>
                                    </div>
                                    <div className="flex flex-col gap-x-3">
                                        <span className="font-semibold">Operation</span>
                                        <span>2013 - 2024</span>
                                    </div>
                                    <div className="flex flex-col gap-x-3">
                                        <span className="font-semibold">Specialties</span>
                                        <span className="w-[200px]">E-Commerce</span>
                                    </div>
                                    <div className="flex flex-col gap-x-3">
                                        <span className="font-semibold">CEO or Founder</span>
                                        <span>William Tanuwijaya</span>
                                    </div>
                                    <div className="flex flex-col gap-x-3">
                                        <span className="font-semibold">Headquarters</span>
                                        <span>Jakart Pusat</span>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>

                    {/* jobs section */}
                    <Tab key="jobs" title="Jobs">
                        <Card>
                            <CardBody tabIndex={0}>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </CardBody>
                        </Card>
                    </Tab>

                    {/* posts section */}
                    <Tab key="posts" title="Posts">
                        <Card>
                            <CardBody tabIndex={0}>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default InfoCompany