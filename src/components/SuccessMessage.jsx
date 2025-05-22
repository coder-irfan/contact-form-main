import React from "react";

function SuccessMessage({ visible }) {

    return (
        <section className={`success ${visible ? "show" : "hide"}`}> {/* If visible === true, the class becomes: success show. If visible === false, the class becomes: success hide */}
          <div className="success__container">
            <h2 className="success__header">Message Sent!</h2>
            <p className="success__text">Thanks for completing the form. We'll be in touch soon!</p>
          </div>
        </section>
    )
}

export default SuccessMessage;