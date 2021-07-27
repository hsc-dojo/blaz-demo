import styles from "@/styles/Feature.module.css";
import Image from "next/image";
import { FaExclamationCircle } from "react-icons/fa";



export default function Feature() {
  return (
    <div className={styles.feature}>
      <h1 className={styles.lead}>
        Why BLAZE is One Thing You
        <span style={{ color: "crimson" }}>
          Need <FaExclamationCircle />
        </span>
      </h1>
      <div className={styles.featureContainer}>
        <article className="card">
                  <Image
            
            layout='fixed'
            src={"/image/brand/brand.svg"}
            alt={"all in one mentor"}
            width={300}
            height={280}
          />
          <div>
            <h3>Solution Videos of Important Textbooks</h3>
            <p>
              In this eBook, you will find step by step solution video tutorial
              of every problems given in the exercise of different textbooks for
              HSC level, for instance, problems given in the exercise of Dr.
              Giasuddin Sir, Ketab sir, Hazari and Nag sir and many more are
              solved precisely and in a step by step manner in this eBook.{" "}
              <br />
              Also important problems from example sections are also explained.
            </p>
          </div>
        </article>

        <article className="card">
                  <Image
                      
            layout='responsive'
            src={"/image/brand/all_in_one _mentor.png"}
            alt={"all in one mentor"}
            width={400}
            height={200}
          />
          <div>
            <h3>All in One Mentor</h3>
            <p>
              This eBook is the one and only tutor who will guide you to the
              ultimate success. So now you can study and take test in a
              structured and effective process designed by the best mentors
              around the country. Now with this eBook you dont have to pay all
              the regular payment of multiple coaching or personal mentors.
            </p>
          </div>
        </article>

        <article className="card">
                  <Image
                    
            layout = 'responsive'
            src={"/image/brand/model_test.png"}
            alt={"all in one mentor"}
            width={300}
            height={300}
          />
          <div>
            <h3>Model Test & Coaching Call</h3>
            <p>
              Every session ends with a mock up test so that you can judge your
              understanding and boost up your confidence over the content of
              respective study sessions. <br />
              Also during the subscription period, everyone will be provied with
              two coaching class per week.
            </p>
          </div>
        </article>

        <article className="card">
                  <Image
                    
            layout = 'responsive'
            src={"/image/brand/study.png"}
            alt={"all in one mentor"}
            width={300}
            height={300}
          />
          <div>
            <h3>Study Routine</h3>
            <p>
              This Ebook has a dedicated secton to guide you on how you should
              study and take test in a session wise structured manner so that
              you can complete you HSC syllabus in the most effective manner in
              the shortest possible time. <br />
              <strong style={{ color: "crimson" }}>
                How do we know it is the most effective study routine?
              </strong>
              <br /> Teachers with decade over experience designed this routine.
              Just give it a try !
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
