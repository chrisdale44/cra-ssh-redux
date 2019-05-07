import { pointsToLevels, milestoneToPoints, trackIds, totalPointsFromMilestoneMap } from '../constants'
import type { MilestoneMap } from '../constants'
import React from 'react'


class Vacancies extends React.Component<Props> {
  render() {

  return (

    <div className="track">
      <style jsx global>{`
    .vacanciesTitle {
      margin-top: 0;
    }

      p.track-description {
        margin-top: 0;
        padding-bottom: 20px;
      }

      div.track {
        margin: 0 0 20px 0;
        padding-bottom: 20px;
        border-bottom: 2px solid #ccc;
        float: left;
        display: block;
        width: 100%;
      }

      .blog {
        display: block;
        height: 172px;
        width: 100%;
      }

    `}</style>
      <h2 className="vacanciesTitle">ASOS Careers</h2>
      <p className="track-description">We’re a global online fashion retailer and, with over 85,000 product lines across womenswear, menswear, footwear, accessories, jewellery and beauty, we’re setting the pace in a worldwide fashion revolution. With over 4,500 new product lines being introduced each week, we’re ambitious and we know our stuff. We don’t just live and breathe our customers – we are our customers. ASOS’ 2,000+ employees are immersed in the creative worlds, live on their mobiles and have a truly entrepreneurial attitude. As a company, we’re not trying to mimic or profit from youth culture – we are part of that culture.</p>
      <a href="https://asos.wd3.myworkdayjobs.com/externalcareers" target="_blank">Click here to see the latest open vacancies and apply</a>
    </div>
    )
  }
}

export default Vacancies;
