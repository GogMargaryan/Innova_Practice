import story from "../../images/story.png";


const OurStory = () => {
    return (
        <section className="our-story">
            <div className="our-story-inner">
                <h3>Discover</h3>
                <h1>OUR STORY</h1>
                <p>There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form,
                    by injected humour, or randomised words which don't look even slightly
                    believable. If you are going to use a passage of Lorem Ipsum, you need to
                    be sure there isn't anything embarrassing hidden in the middle of text.
                    All the Lorem Ipsum generators on the Internet tend to repeat predefined
                    chunks as necessary, making this the first true generator on the Internet.
                    It uses a dictionary of over 200 Latin words, combined with a handful
                </p>
                <img src={story} alt="signature" />
            </div>

        </section>

    )
}

export default OurStory