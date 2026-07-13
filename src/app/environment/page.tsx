"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import './environment.css';

export default function EnvironmentPage() {
    useEffect(() => {
        // reveal on scroll
        const revealEls = document.querySelectorAll('.reveal');
        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('in-view');
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.15 });
        revealEls.forEach(el => io.observe(el));

        // animated counters
        const counters = document.querySelectorAll('[data-count]');
        const animateCounter = (el: Element) => {
            const target = parseFloat(el.getAttribute('data-count') || '0');
            const decimals = parseInt(el.getAttribute('data-decimal') || '0');
            const duration = 1600;
            const start = performance.now();
            const step = (now: number) => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const value = target * eased;
                el.textContent = decimals ? value.toFixed(decimals) : Math.floor(value).toLocaleString();
                if (progress < 1) requestAnimationFrame(step);
                else el.textContent = decimals ? target.toFixed(decimals) : target.toLocaleString();
            };
            requestAnimationFrame(step);
        };
        const counterIO = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    animateCounter(e.target);
                    counterIO.unobserve(e.target);
                }
            });
        }, { threshold: 0.4 });
        counters.forEach(c => counterIO.observe(c));

        return () => {
            io.disconnect();
            counterIO.disconnect();
        };
    }, []);

    return (
        <div className="env-page">
            {/* ============ SECTION 1: HERO ============ */}
            <section className="hero">
                <div className="hero-media"></div>
                <div className="hero-content">
                    <span className="eyebrow on-dark">GoSirat Green Initiative</span>
                    <h1>Moving Every Child Toward a Cleaner Tomorrow</h1>
                    <p>We provide simple and eco-friendly school transportation to make your daily pick and drop easier. By choosing us, you help reduce traffic and create a cleaner, healthier future for our kids.</p>
                    <div className="hero-actions">
                        <a href="#cta" className="btn btn-primary btn-lg">Explore the Green Initiative</a>
                        <a href="#why" className="btn btn-on-dark btn-lg">See How It Works</a>
                    </div>
                </div>
                <div className="hero-scroll">
                    <span>Scroll</span>
                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none"><path d="M7 1v15M1 10l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
            </section>

            {/* ============ SECTION 2: WHY IT MATTERS ============ */}
            <section className="why section-pad" id="why">
                <div className="env-container">
                    <div className="why-grid">
                        <div className="why-text reveal">
                            <span className="eyebrow">Why It Matters</span>
                            <h2 style={{ marginTop: '16px', fontSize: 'clamp(30px,3.6vw,42px)' }}>Why Green Transportation Matters</h2>
                            <p style={{ marginTop: '18px', fontSize: '17px', color: 'var(--ink-soft)', lineHeight: '1.75' }}>GoSirat makes your daily pick and drop simple and stress-free. By replacing thousands of individual car trips with our efficient school transportation network, we reduce traffic and pollution—giving families back their time and building a cleaner future for our kids.</p>

                            <div className="why-features">
                                <div className="feature-mini">
                                    <div className="icon-badge">
                                        <svg viewBox="0 0 24 24" fill="none"><path d="M12 3C7 3 4 7 4 12c0 5 3.5 9 8 9s8-4 8-9c0-2-1-4-2-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M12 21V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                                    </div>
                                    <h4>Reduced Emissions</h4>
                                    <p>Fewer vehicles on the road means measurably cleaner air around every school.</p>
                                </div>
                                <div className="feature-mini">
                                    <div className="icon-badge blue">
                                        <svg viewBox="0 0 24 24" fill="none"><circle cx="6" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.8"/><circle cx="18" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.8"/><path d="M8 18h8M6 15.6V8a2 2 0 0 1 2-2h5l4 4v5.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                                    </div>
                                    <h4>Less Congestion</h4>
                                    <p>Shared routes stop the heavy traffic jams at school gates and on neighborhood streets, making drop-off times faster and safer for everyone.</p>
                                </div>
                                <div className="feature-mini">
                                    <div className="icon-badge">
                                        <svg viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    </div>
                                    <h4>Safer Commutes</h4>
                                    <p>Trained drivers and monitored vehicles keep every ride secure and tracked.</p>
                                </div>
                                <div className="feature-mini">
                                    <div className="icon-badge blue">
                                        <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8"/><path d="M12 7.5v5l3.2 1.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    </div>
                                    <h4>Smarter Routing</h4>
                                    <p>Our smart planning cuts out wasted time and extra miles from every trip, making each journey as efficient as possible.</p>
                                </div>
                            </div>
                        </div>

                        <div className="why-media reveal reveal-delay-2">
                            <img src="/Gosirat-2.png" alt="Shared green transportation versus heavy traffic" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ SECTION 3: DRIVING POSITIVE ENVIRONMENTAL IMPACT ============ */}
            <section className="impact section-pad" id="impact">
                <div className="env-container">
                    <div className="section-head center reveal">
                        <span className="eyebrow">Our Approach</span>
                        <h2>Driving Positive Environmental Impact</h2>
                        <p>Four core principles guide every route, vehicle, and decision at GoSirat, ensuring our service is always reliable, efficient, and focused on your family&apos;s needs.</p>
                    </div>

                    <div className="impact-grid">
                        <div className="impact-card reveal">
                            <div className="icon-badge">
                                <svg viewBox="0 0 24 24" fill="none"><path d="M12 3C7 3 4 7 4 12c0 5 3.5 9 8 9s8-4 8-9c0-2-1-4-2-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M12 21V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                            </div>
                            <h3>Lower Carbon Emissions</h3>
                            <p>Our smart routes and shared trips use less fuel and lower carbon emissions on every school run, mile after mile.</p>
                        </div>
                        <div className="impact-card reveal reveal-delay-1">
                            <div className="icon-badge blue">
                                <svg viewBox="0 0 24 24" fill="none"><path d="M4 14l1.5-5A2 2 0 0 1 7.4 7.5h9.2A2 2 0 0 1 18.5 9L20 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="14" width="18" height="4.5" rx="1.6" stroke="currentColor" strokeWidth="1.8"/><circle cx="7.5" cy="18.7" r="1.4" stroke="currentColor" strokeWidth="1.8"/><circle cx="16.5" cy="18.7" r="1.4" stroke="currentColor" strokeWidth="1.8"/></svg>
                            </div>
                            <h3>Fuel-Efficient Fleet</h3>
                            <p>Modern, well-maintained vehicles are engineered for lower consumption and cleaner combustion across every neighborhood route.</p>
                        </div>
                        <div className="impact-card reveal reveal-delay-2">
                            <div className="icon-badge">
                                <svg viewBox="0 0 24 24" fill="none"><circle cx="6" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.8"/><circle cx="18" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.8"/><path d="M6 8.2V13a3 3 0 0 0 3 3h6.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M14 13.5l2.5 2.5-2.5 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                            <h3>Smart Route Optimization</h3>
                            <p>Our smart system constantly updates routes to cut out extra miles and wasted time, making every trip as fast and efficient as possible.</p>
                        </div>
                        <div className="impact-card reveal reveal-delay-3">
                            <div className="icon-badge blue">
                                <svg viewBox="0 0 24 24" fill="none"><circle cx="8" cy="9" r="2.6" stroke="currentColor" strokeWidth="1.8"/><circle cx="17" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.8"/><path d="M3.5 19c.7-3 2.4-4.6 4.5-4.6s3.8 1.6 4.5 4.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M13.8 14.6c1.9.2 3.3 1.8 3.9 4.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                            </div>
                            <h3>Community-Wide Reduction</h3>
                            <p>Shared rides remove thousands of individual car trips from local roads and school gates every single week.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ SECTION 4: COMMITMENT ============ */}
            <section className="commitment section-pad" id="commitment">
                <div className="env-container">
                    <div className="section-head center reveal">
                        <span className="eyebrow on-dark">Our Promise</span>
                        <h2>Our Commitment to a Sustainable Future</h2>
                        <p>Six standing commitments that shape how GoSirat operates today, and how it grows tomorrow.</p>
                    </div>

                    <div className="commitment-grid">
                        <div className="commitment-card reveal">
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none"><path d="M12 3C7 3 4 7 4 12c0 5 3.5 9 8 9s8-4 8-9c0-2-1-4-2-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M12 21V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></div>
                            <div><h4>Carbon-Conscious Fleet Expansion</h4><p>Every new vehicle we add must meet high standards for fuel efficiency and low emissions.</p></div>
                        </div>
                        <div className="commitment-card reveal reveal-delay-1">
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none"><path d="M13 3L5 14h6l-1 7 8-11h-6l1-7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg></div>
                            <div><h4>Renewable Energy Partnerships</h4><p>Working with clean-energy providers to power depots and charging infrastructure.</p></div>
                        </div>
                        <div className="commitment-card reveal reveal-delay-2">
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none"><path d="M4 7l1-3h14l1 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 7l1 12.2A2 2 0 0 0 8 21h8a2 2 0 0 0 2-1.8L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.5 11v6M14.5 11v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></div>
                            <div><h4>Zero-Waste Operations Goal</h4><p>Reducing operational waste across depots, maintenance, and back-office logistics.</p></div>
                        </div>
                        <div className="commitment-card reveal reveal-delay-3">
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none"><circle cx="8" cy="9" r="2.6" stroke="currentColor" strokeWidth="1.8"/><circle cx="17" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.8"/><path d="M3.5 19c.7-3 2.4-4.6 4.5-4.6s3.8 1.6 4.5 4.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M13.8 14.6c1.9.2 3.3 1.8 3.9 4.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></div>
                            <div><h4>Local Green Job Creation</h4><p>Building driver and technician roles within the communities GoSirat serves.</p></div>
                        </div>
                        <div className="commitment-card reveal reveal-delay-4">
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none"><path d="M4 19.5V6a2 2 0 0 1 2-2h9l5 5v10.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19.5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M8 12h8M8 15.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></div>
                            <div><h4>Community Environmental Education</h4><p>Classroom programs that teach students the value of shared, sustainable travel.</p></div>
                        </div>
                        <div className="commitment-card reveal reveal-delay-5">
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none"><path d="M4 19V9l6-4 6 4v10" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 19v-6h4v6M14 9h5v10" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg></div>
                            <div><h4>Transparent Sustainability Reporting</h4><p>Publishing clear, verifiable progress against every environmental commitment.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ SECTION 5: STATISTICS ============ */}
            <section className="stats section-pad" id="stats">
                <div className="env-container">
                    <div className="section-head center reveal">
                        <span className="eyebrow">By the Numbers</span>
                        <h2>Environmental Impact Statistics</h2>
                        <p>A snapshot of the measurable difference shared, green transportation is already making.</p>
                    </div>

                    <div className="stats-grid">
                        <div className="stat-card reveal">
                            <span className="route-dot"></span>
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none"><path d="M12 3C7 3 4 7 4 12c0 5 3.5 9 8 9s8-4 8-9c0-2-1-4-2-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M12 21V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></div>
                            <div className="stat-num"><span data-count="12400">0</span><span className="unit">+</span></div>
                            <div className="stat-label">Tons CO2 Avoided</div>
                        </div>
                        <div className="stat-card reveal reveal-delay-1">
                            <span className="route-dot"></span>
                            <div className="icon-badge blue"><svg viewBox="0 0 24 24" fill="none"><circle cx="6" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.8"/><circle cx="18" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.8"/><path d="M6 8.2V13a3 3 0 0 0 3 3h6.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></div>
                            <div className="stat-num"><span data-count="3.1" data-decimal="1">0</span><span className="unit">M km</span></div>
                            <div className="stat-label">Optimized Route Distance</div>
                        </div>
                        <div className="stat-card reveal reveal-delay-2">
                            <span className="route-dot"></span>
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none"><path d="M4 14l1.5-5A2 2 0 0 1 7.4 7.5h9.2A2 2 0 0 1 18.5 9L20 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="14" width="18" height="4.5" rx="1.6" stroke="currentColor" strokeWidth="1.8"/><circle cx="7.5" cy="18.7" r="1.4" stroke="currentColor" strokeWidth="1.8"/><circle cx="16.5" cy="18.7" r="1.4" stroke="currentColor" strokeWidth="1.8"/></svg></div>
                            <div className="stat-num"><span data-count="48000">0</span><span className="unit">+</span></div>
                            <div className="stat-label">Car Trips Removed</div>
                        </div>
                        <div className="stat-card reveal reveal-delay-3">
                            <span className="route-dot"></span>
                            <div className="icon-badge blue"><svg viewBox="0 0 24 24" fill="none"><circle cx="8" cy="9" r="2.6" stroke="currentColor" strokeWidth="1.8"/><circle cx="17" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.8"/><path d="M3.5 19c.7-3 2.4-4.6 4.5-4.6s3.8 1.6 4.5 4.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M13.8 14.6c1.9.2 3.3 1.8 3.9 4.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></div>
                            <div className="stat-num"><span data-count="26500">0</span><span className="unit">+</span></div>
                            <div className="stat-label">Students Served Daily</div>
                        </div>
                        <div className="stat-card reveal reveal-delay-4">
                            <span className="route-dot"></span>
                            <div className="icon-badge"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8"/><path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.3 3.6 8.5s-1.2 6.2-3.6 8.5c-2.4-2.3-3.6-5.3-3.6-8.5S9.6 5.8 12 3.5z" stroke="currentColor" strokeWidth="1.8"/></svg></div>
                            <div className="stat-num"><span data-count="94">0</span><span className="unit">%</span></div>
                            <div className="stat-label">Fleet Efficiency Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ SECTION 6: GLOBAL VISION ============ */}
            <section className="global section-pad" id="global">
                <div className="env-container">
                    <div className="global-grid">
                        <div className="global-text reveal">
                            <div className="section-head">
                                <span className="eyebrow blue">Looking Ahead</span>
                                <h2>A Green Standard, Built for the World</h2>
                                <p>What starts as smarter school routes in one city becomes a blueprint for sustainable transportation everywhere GoSirat operates.</p>
                            </div>
                            <ul className="global-list">
                                <li><span className="dot"></span>Expanding shared green fleets to new cities and regions.</li>
                                <li><span className="dot"></span>Standardizing emissions reporting across every market.</li>
                                <li><span className="dot"></span>Partnering with local governments on clean-mobility policy.</li>
                                <li><span className="dot"></span>Connecting every route into one global sustainability network.</li>
                            </ul>
                        </div>

                        <div className="global-illustration reveal reveal-delay-2">
                            <img src="/Gosirat-3.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ SECTION 7: CTA ============ */}
            <section className="cta" id="cta">
                <div className="cta-media"></div>
                <div className="cta-content">
                    <span className="eyebrow on-dark">Get Involved</span>
                    <h2>Join the Movement Toward Greener School Journeys</h2>
                    <p>Register your school or family today and be part of a cleaner, safer commute for the next generation.</p>
                    <Link href="/register" className="btn btn-primary btn-lg">Register Today</Link>
                </div>
            </section>
        </div>
    );
}
