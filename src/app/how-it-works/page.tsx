import InfoPage from "@/components/InfoPage";

const HowItWorksPage = () => (
    <InfoPage
        title="How it works"
        description="Parents, schools, and drivers can coordinate transportation through a simple, transparent flow built for reliable daily school travel."
        ctaLabel="Explore the platform"
        ctaHref="/register"
        sections={[
            {
                heading: "For Parents",
                items: [
                    "1. Create account and verify identity with government ID",
                    "2. Add your children and set up emergency contacts",
                    "3. Book rides or subscribe to recurring school routes",
                    "4. Track live location and receive real-time notifications",
                    "5. Confirm pickup/dropoff with secure handover PIN",
                ],
            },
            {
                heading: "For Schools",
                items: [
                    "1. Enroll with GoSirat and set up district coordination",
                    "2. Configure pickup/dropoff times and route preferences",
                    "3. Communicate schedules to parent community",
                    "4. Monitor ride capacity and attendance in real-time",
                    "5. Generate reports and analytics for transportation oversight",
                ],
            },
            {
                heading: "For Drivers",
                items: [
                    "1. Complete application, background check, and vehicle verification",
                    "2. Receive training on safe handover and child interaction protocols",
                    "3. Accept assigned routes or pick up on-demand trips",
                    "4. Use in-app navigation and real-time trip details",
                    "5. Confirm pickups and dropoffs, receive ratings and earnings",
                ],
            },
            {
                heading: "On Every Ride",
                items: [
                    "Driver confirms pickup with parent-provided PIN",
                    "Real-time location tracking available to authorized parents",
                    "In-app communication channel for questions or concerns",
                    "Driver confirms safe dropoff and completion",
                    "All parties receive ride summary and attendance confirmation",
                ],
            },
        ]}
    >
        <p>Ready to experience safer, more connected school transportation?</p>  </InfoPage>
);

export default HowItWorksPage;