import { pointsToLevels, milestoneToPoints, trackIds, totalPointsFromMilestoneMap } from '../constants'
import type { MilestoneMap } from '../constants'
import React from 'react'

type Props = {
  milestoneByTrack: MilestoneMap
}

const data = {
  Graduate: {
    blogImg: "https://cdn-images-1.medium.com/max/800/0*qBlA8P8GHLVvJ0XP",
    blogSrc: "https://medium.com/asos-techblog/the-incredibles-a-graduate-final-demo-45f43ede86c5",
    blogDes: "The Incredibles: A graduate final demo",
    video: "https://www.youtube.com/embed/EYnbdvGib98"
  },
  Associate: {
    blogImg: "https://cdn-images-1.medium.com/max/800/1*GLfl8UMBw_VSOfVQ7PdZJg.jpeg",
    blogSrc: "https://medium.com/asos-techblog/a-day-in-the-life-of-nat-h-associate-software-engineer-b0a4335fd398",
    blogDes: "A day in the life of… Nat H (Associate Software Engineer)",
    video: "https://www.youtube.com/embed/JGweV3zkyFA"
  },
  MidLevel: {
    blogImg: "https://cdn-images-1.medium.com/max/800/0*fpHBm4mbr2AIgk5o.png",
    blogSrc: "https://medium.com/asos-techblog/how-to-easily-start-using-cosmosdb-in-your-c-application-in-no-time-with-cosmonaut-3d6964d17c0a",
    blogDes: "How to easily start using CosmosDB in your C# application in no time with Cosmonaut",
    video: "https://www.youtube.com/embed/JGweV3zkyFA"
  },
  SeniorI: {
    blogImg: "https://cdn-images-1.medium.com/max/800/0*YVl-O9wQxVetLHNV",
    blogSrc: "https://medium.com/asos-techblog/javascript-quality-control-with-jest-and-eslint-b888eeb4b0c4",
    blogDes: "Javascript Quality Control with Jest and ESLint",
    video: "https://www.youtube.com/embed/JGweV3zkyFA"
  },
  SeniorII: {
    blogImg: "https://cdn-images-1.medium.com/max/800/1*IegFtGg3n6FiCeik2PDuhA.png",
    blogSrc: "https://medium.com/asos-techblog/things-i-learnt-in-my-first-azure-functions-project-a02c0aa5d24e",
    blogDes: "Things I Learnt in My First Azure Functions Project",
    video: "https://www.youtube.com/embed/JGweV3zkyFA"
  },
  Lead: {
    blogImg: "https://cdn-images-1.medium.com/max/800/1*wkSy1IF4wg_Y8EK5HUoAoQ.png",
    blogSrc: "https://medium.com/asos-techblog/release-quicker-with-config-only-deployments-3db2ea99ba32",
    blogDes: "Release quicker with config-only deployments",
    video: "https://www.youtube.com/embed/JGweV3zkyFA"
  },
  Principal: {
    blogImg: "https://cdn-images-1.medium.com/max/800/1*FgBmZ9CctrMiELnmIE5CFw.jpeg",
    blogSrc: "https://medium.com/asos-techblog/getting-fresco-to-respect-http-response-cache-headers-a31de15e6496",
    blogDes: "Getting Fresco to respect HTTP response cache headers",
    video: "https://www.youtube.com/embed/JGweV3zkyFA"
  },
}

class Video extends React.Component<Props> {
  render() {
    const totalPoints = totalPointsFromMilestoneMap(this.props.milestoneByTrack)
    let currentLevel

    let pointsForCurrentLevel = totalPoints
    while (!(currentLevel = pointsToLevels[pointsForCurrentLevel])) {
      pointsForCurrentLevel--
    }    
    const milestoneToTitle = (currentLevel) => {
      switch (currentLevel) {
        case "Graduate":
          return data.Graduate;
        case "Associate":
          return data.Associate;
        case "Mid Level":
          return data.MidLevel;
        case "Senior I":
          return data.SeniorI;
        case "Senior II":
          return data.SeniorII;
        case "Lead":
          return data.Lead;
        case "Principal":
          return data.Principal;
        default:
          return data.Graduate;
      }
    };

    const currentLevelData = milestoneToTitle(currentLevel);

  return (

    <div className="track">
      <style jsx global>{`

      p.track-description {
        margin-top: 0;
        padding-bottom: 20px;
        border-bottom: 2px solid #ccc;
      }

      .blog {
        display: block;
        height: 172px;
        width: 100%;
      }

      .video: {
        float: left;
      }

      .blogContainer {
        float: left;
        padding: 0 12px;
        max-width: 32%;
      }

      .blogTitle {
        margin-top: 0;
      }

      .blogImg {
        width:100%;
        height:100%;
      }
    `}</style>
      <h2 className="videoTitle" style={{ marginTop: "0" }}>See A {currentLevel} Engineer At Work</h2>
      <p className="track-description">Check out our latest videos and blogs from fellow {currentLevel} Engineers as ASOS</p>
      <div>
      <div>
        <div>
            <div className="video" style={{ float: "left" }}>
                <iframe width="620" height="468" src={currentLevelData.video} frameBorder="0" allowFullScreen=""></iframe>
            </div>
        </div>
      </div>
      <div>
        <div className="blogContainer">
          <h3 className="blogTitle">Tech Blogs...</h3>
          <a 
          className="blog"
          href={currentLevelData.blogSrc}
          target="_blank">
            <img className="blogImg" src={currentLevelData.blogImg} />
          </a>
          <h4 >{currentLevelData.blogDes}</h4>
          <div>
            <a href="https://medium.com/asos-techblog">View all blogs</a>
          </div>
        </div>
      </div>
      </div>
    </div>
    )
  }
}

export default Video;
