import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import './TestimonialsSection.scss';

// Replace these labelled examples with approved customer quotes and attribution.
const testimonials = [
    { quote: 'Bringing case processing and signal review into one workflow would help our team spend more time assessing the evidence and less time moving information between tools.', role: 'Pharmacovigilance lead', team: 'Pharma & biotech', initials: 'PV' },
    { quote: 'For a team supporting multiple clients, keeping each client’s safety data separate while working in one platform is an essential part of the experience.', role: 'Safety operations lead', team: 'Service providers', initials: 'SO' },
    { quote: 'A clear record of what the AI recommended and what the reviewer decided is the kind of traceability we look for in a safety platform.', role: 'Regulatory reviewer', team: 'Regulatory & quality', initials: 'RQ' },
    { quote: 'Seeing the source behind an answer matters. Evidence citations give reviewers a starting point for checking the information and applying their own judgement.', role: 'Medical safety reviewer', team: 'Safety review teams', initials: 'MS' },
    { quote: 'Connecting literature screening with case preparation would make it easier to follow relevant publications through review without losing the context that makes them important.', role: 'Literature screening lead', team: 'Literature teams', initials: 'LS' },
    { quote: 'Keeping reporting deadlines, document versions and review histories together is the kind of practical support our regulatory team needs in its daily work.', role: 'Reporting specialist', team: 'Regulatory operations', initials: 'RS' },
];

export default function TestimonialsSection() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [visibleCount, setVisibleCount] = useState(3);
    const [activeIndex, setActiveIndex] = useState(0);
    const lastIndex = testimonials.length - visibleCount;

    useEffect(() => {
        const tablet = window.matchMedia('(max-width: 1100px)');
        const mobile = window.matchMedia('(max-width: 650px)');
        function updateLayout() {
            setVisibleCount(mobile.matches ? 1 : tablet.matches ? 2 : 3);
            setActiveIndex(0);
            if (trackRef.current) trackRef.current.scrollLeft = 0;
        }
        updateLayout();
        tablet.addEventListener('change', updateLayout);
        mobile.addEventListener('change', updateLayout);
        return () => {
            tablet.removeEventListener('change', updateLayout);
            mobile.removeEventListener('change', updateLayout);
        };
    }, []);

    function getStep() {
        const track = trackRef.current;
        const card = track?.firstElementChild;
        if (!track || !card) return 0;
        return card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap);
    }

    function goTo(index: number) {
        const nextIndex = (index + lastIndex + 1) % (lastIndex + 1);
        trackRef.current?.scrollTo({
            left: nextIndex * getStep(),
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        });
    }

    function onTrackKeyDown(event: KeyboardEvent<HTMLDivElement>) {
        if (event.target !== event.currentTarget) return;
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        if (event.key === 'Home') goTo(0);
        else if (event.key === 'End') goTo(lastIndex);
        else goTo(activeIndex + (event.key === 'ArrowRight' ? 1 : -1));
    }

    return (
        <section className="testimonials-slider section" id="testimonials" aria-labelledby="testimonials-title" aria-roledescription="carousel">
            <div className="wrap">
                <div className="testimonials-heading">
                    <div className="overview-heading">
                        <p className="eyebrow">TESTIMONIALS</p>
                        <h2 id="testimonials-title">Perspectives from safety teams.</h2>
                        <p>Illustrative testimonials. These examples are not verified customer endorsements.</p>
                    </div>
                    <div className="testimonial-arrows" aria-label="Testimonial controls">
                        <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Previous testimonials" aria-controls="testimonial-track"><span aria-hidden="true">←</span></button>
                        <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Next testimonials" aria-controls="testimonial-track"><span aria-hidden="true">→</span></button>
                    </div>
                </div>
                <div
                    className="testimonial-track"
                    id="testimonial-track"
                    ref={trackRef}
                    tabIndex={0}
                    role="group"
                    aria-label="Testimonial cards. Use the left and right arrow keys to browse."
                    onKeyDown={onTrackKeyDown}
                    onScroll={() => {
                        const step = getStep();
                        if (step) setActiveIndex(Math.max(0, Math.min(lastIndex, Math.round((trackRef.current?.scrollLeft ?? 0) / step))));
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <figure className="testimonial-slide" key={testimonial.initials} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${testimonials.length}`}>
                            <div className="testimonial-card-top"><span className="testimonial-quote-mark" aria-hidden="true">“</span><span className="testimonial-sample">Sample testimonial</span></div>
                            <blockquote><p>{testimonial.quote}</p></blockquote>
                            <figcaption>
                                <span className="testimonial-avatar" aria-hidden="true">{testimonial.initials}</span>
                                <span><strong>{testimonial.role}</strong><small>{testimonial.team}</small></span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
                <div className="testimonial-pagination" aria-label="Choose testimonials">
                    {Array.from({ length: lastIndex + 1 }, (_, index) => (
                        <button type="button" key={index} onClick={() => goTo(index)} aria-label={`Show testimonials ${index + 1} to ${index + visibleCount}`} aria-current={activeIndex === index ? 'true' : undefined} aria-controls="testimonial-track"><span /></button>
                    ))}
                </div>
                <p className="testimonial-status" aria-live="polite" aria-atomic="true">Showing testimonials {activeIndex + 1} to {activeIndex + visibleCount} of {testimonials.length}.</p>
            </div>
        </section>
    );
}
