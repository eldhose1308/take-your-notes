import React, { useState } from "react";

import Typography from "_components/Misc/Typography/Typography";

import { BasicInformationForm, SocialForm } from "./setupForms";

const tabItems = [
    { id: 'basic_information', label: 'Basic Information', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg> },
    { id: 'user_management', label: 'User Management', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-round"><path d="M18 21a8 8 0 0 0-16 0" /><circle cx="10" cy="8" r="5" /><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" /></svg> },
    { id: 'social', label: 'Social', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rss"><path d="M4 11a9 9 0 0 1 9 9" /><path d="M4 4a16 16 0 0 1 16 16" /><circle cx="5" cy="19" r="1" /></svg> },
    { id: 'seo', label: 'SEO', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column-increasing"><path d="M13 17V9" /><path d="M18 17V5" /><path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="M8 17v-3" /></svg> },
    { id: 'customization', label: 'Customization', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg> },
    { id: 'newsletter', label: 'Newsletter', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg> },
    { id: 'preview', label: 'Preview', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-view"><path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" /><path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" /><circle cx="12" cy="12" r="1" /><path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" /></svg> },
];

const renderForm = (selectedTab, props) => {
    switch(selectedTab){
        case 'basic_information':
            return <BasicInformationForm {...props} />;
        case 'social':
            return <SocialForm {...props} />;
        default:
            return <p>No Form Available</p>
    }
}

const Publish = () => {
    const [selectedTab, setSelectedTab] = useState('basic_information');

    return (
        <React.Fragment>
            <div className="flex m-5">
                <div className="flex w-full flex-col">

                    <div className="flex flex-col my-2">
                        <Typography size='lg' type='h2'>Publish Your App</Typography>
                        <Typography variant='secondary' size='sm' textVariant='default'>
                            Easily build your portal/app and personalize your settings to connect with your audience effectively. Start customizing today!
                        </Typography>
                    </div>

                    <div className="flex flex-nowrap bg-default w-full px-2 my-4 rounded-md">

                        <div className="flex max-w-xs text-sm">
                            <div className="flex flex-col w-full p-2 border border-custom rounded-md my-4 text-default">

                                {tabItems.map((tabItem) => {
                                    const { id, label, icon } = tabItem;
                                    const isActive = selectedTab === id;
                                    return (
                                        <div key={id} onClick={() => setSelectedTab(id)} className={`flex cursor-pointer rounded-md px-4 py-2 my-1 ${isActive ? 'bg-accent text-custom' : 'bg-default hover-highlight'}`}>
                                            <span className="flex items-center mr-2">
                                                {icon}
                                            </span>
                                            <span>{label}</span>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>


                        <div className="flex flex-col grow-2 p-2 mx-8 border border-custom rounded-md my-4 text-default">

                            {/* <BasicInformationForm /> */}
                                {renderForm(selectedTab)}

                        </div>


                    </div>


                </div>
            </div>
        </React.Fragment>
    )
}

export default Publish