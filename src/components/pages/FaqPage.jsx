import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const FaqPage = () => {
    const data = {
        title: "FAQ About MBBS In Nepal",
        rows: [
            {
                title: "How much NEET Score is required for MBBS in Nepal ?",
                content: `For getting admission in Nepal, the student is required to complete 12th class with Physics, Chemistry and Biology as their compulsory subjects. Additionally, the student is expected to score minimum of 50% marks in NEET.`,
            },
            {
                title: "How many medical colleges in there in Nepal ?",
                content:
                    "To pursue MBBS in Nepal, there are 6 government medical colleges, 15 private medical colleges and only 1 army medical college in Nepal.",
            },
            {
                title: "Is Nepal good for MBBS ?",
                content: `Nepal is one among the top 5 nations where you can study for your MBBS at a low cost. Studying here enables a medical aspirant to earn a degree from the greatest medical colleges that have accreditation from some of the most prestigious institutions in the world, like WHO, UNESCO, and NMC. `,
            },
            {
                title: "Is NEET valid in Nepal ? ",
                content: `Yes, NEET is valid in Nepal as per NMC guidelines latest guidelines. So, only those medical aspirants who have qualified NEET exam shall be allowed to pursue MBBS in Nepal.`
            },
            {
                title: "Which is the No. 1 private medical college in Nepal ?",
                content: `B.P Koirala Institute of Medical Science is one of the best private medical colleges in Nepal.

                `
            },
        ],
    };
    const styles = {
        // bgColor: 'white',
        titleTextColor: "blue",
        rowTitleColor: "blue",
        // rowContentColor: 'grey',
        // arrowColor: "red",
    };
    
    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };
  return (
  <>
   <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
  </>
  )
}

export default FaqPage