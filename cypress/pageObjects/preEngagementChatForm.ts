const PreEngagementChatForm = {
    toggleWebchatExpanded() {
        cy.get('[data-test="entry-point-button"]').click();
    },
};
export default PreEngagementChatForm;
