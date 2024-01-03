import React from 'react';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isLoading = false; //TODO: add redux

    return (
        <div
            className="mt-10 ml-10 mr-10"
            style={{ opacity: `${isLoading ? 0.5 : 1}` }}
        >
            {children}
        </div>
    );
};

export default Container;
