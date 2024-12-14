import React from "react";

import AdditionalContentSection from "_components/Misc/AdditionalContentSection";
import NotAvailable from "_components/DisplayStates/Others/NotAvailable";

const AdditionalSeries = (props) => {

    return (
        <React.Fragment>
            <div className="opacity-50 cursor-not-allowed">
                <AdditionalContentSection
                    heading='Series You Might Like'
                >
                    <NotAvailable size='sm' />
                </AdditionalContentSection>
            </div>
        </React.Fragment>
    )
}

export default AdditionalSeries;