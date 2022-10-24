import React, { useState } from "react";
import styled from 'styled-components'
import GlobalContent from "./GlobalContent.component";
import GlobalFooterComponent from "./GlobalFooter.component";
import GlobalHeaderComponent from "./GlobalHeader.component";

const GlobalStructureComponent = styled.div`
    border: 2px solid #fcfcfc;
    border-radius: 10px;
    max-width: 900px;
    height: 700px;

    overflow: hidden;

    background-color: #EEEEEE;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const GlobalStructure = (props: {}) => {

    const [pagination, setPagination] = useState(0)

    return (
        <GlobalStructureComponent>
            <GlobalHeaderComponent />

            {pagination === 0 ? <GlobalContent /> : 'none'}
            
            <GlobalFooterComponent pagination={setPagination} />
        </GlobalStructureComponent>
    )
}

export default GlobalStructure