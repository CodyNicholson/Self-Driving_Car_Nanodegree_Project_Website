var bio =
{
    "name" : "Self-Driving Car Nanodegree Projects",
    "role" : "By: Cody Nicholson",
    "contacts" :
    {
        "email" : "codynicholson96@gmail.com",
        "github" : "CodyNicholson",
        "twitter" : "@CodyLiam7",
        "location" : ["Schaumburg, IL", "Lincoln Park, IL"],
        "linkedIn" : "codynicholson"
    },
    "welcomeMessage" : "This is a list of all the projects I completed while enrolled in Udacity's Self-Driving Car Nanodegree"
};

var projects =
{
    "projs" :
    [
        {
            "title" : "Unscented Kalman Filter Project",
            "dates" : "July 2017",
            "description" : "I built this Unscented Kalman filter to improve my original Extended Kalman filter. Instead of using linearization to predict the behavior of the system under investigation, I used the Unscented "+
                "Transformation. This filter has some advantages when compared to the EKF, because the Unscented transformation describes the nonlinear system better than the linearization, hence this filter converges to the "+
                "right solution more rapidly.",
            "images" : ["https://github.com/CodyNicholson/Self-Driving_Car_Projects_Website/blob/master/images/ukfPredictedMeanAndCovarianceEquationsWeights.jpg?raw=true","https://github.com/CodyNicholson/Self-Driving_Car_Projects_Website/blob/master/images/ukfUpdate.jpg?raw=true"],
            "captions": ["These are the equations I used for the predict step of my Unscented Kalman filter","These are the equations I used in the update step of my Unscented Kalman filter"],
            "link": "https://github.com/CodyNicholson/Unscented_Kalman_Filter_Project"
        },
        {
            "title" : "Extended Kalman Filter Project",
            "dates" : "June 2017 - July 2017",
            "description" : "I built this Extended Kalman filter using C++ to estimate the state of a moving object of interest with noisy lidar and radar measurements. A standard Kalman filter can only handle linear equations. "+
                "To make state estimation on nonlinear systems I had to refactor the original Kalman Filter into an Extended Kalman filter that can linearize the system under investigation around its current state and force the "+
                "filter to use this linearized version of the system as a model.",
            "images" : ["https://github.com/CodyNicholson/Self-Driving_Car_Projects_Website/blob/master/images/KalmanFilterAlgMap.jpg?raw=true","https://github.com/CodyNicholson/Self-Driving_Car_Projects_Website/blob/master/images/predUpdate.jpg?raw=true"],
            "captions": ["This is a map of the standard Kalman Filer algorithm","This represents the predict-update loop that the Kalman Filter uses to gain information about its location instantaneously"],
            "link": "https://github.com/CodyNicholson/Extended_Kalman_Filter_Project"
        },
        {
            "title" : "Vehicle Detection Project",
            "dates" : "May 2017",
            "description" : "I created this project (part of the Udacity Self-Driving Car Nanodegree program) to teach a self-driving car to detect other vehicles on the road. First, I performed a Histogram of Oriented"+
                " Gradients (HOG) feature extraction on a labeled training set of images and trained a Linear SVM classifier based on these features. Next, I implemented a sliding-window technique that used my trained"+
                " classifier to search for vehicles in images or each frame of a video. I then ran my pipeline on a video stream and created a heat map of recurring detections frame by frame to reject outliers and follow detected vehicles.",
            "images" : ["https://github.com/CodyNicholson/Self-Driving_Car_Projects_Website/blob/master/images/hog_example.jpg?raw=true","https://github.com/CodyNicholson/Self-Driving_Car_Projects_Website/blob/master/images/heatmap.jpg?raw=true","https://github.com/CodyNicholson/Self-Driving_Car_Projects_Website/blob/master/images/test_pipeline.jpg?raw=true"],
            "captions": ["In this picture you can see what an image looks like next to its histogram of oriented gradients","This is an image of a heat map that is used to filter out false positives in the car detecting process","Finally - after using all of those techniques - this is an example of a single frame after going through my pipeline"],
            "link": "https://github.com/CodyNicholson/Vehicle_Detection_Project"
        },
        {
            "title" : "Advanced Lane Line Finding Project",
            "dates" : "May 2017",
            "description" : "In this project I wrote an algorithm to teach a self-driving car to identify lanes. To do this, I first computed the camera calibration matrix and distortion coefficients given a set of "+
                "chessboard images. Then, I applied a distortion correction to raw images. I used color transforms, gradients, etc., to create a thresholded binary image. Then I applied a perspective transform to change "+
                "the binary image perspective to a 'birds-eye view'. I detected the lane pixels and fit it to find the lane boundary. Then I determined the curvature of the lane and vehicle position with respect to center."+
                " Then I warped the detected lane boundaries back onto the original image. Lastly, I outputted a visual display of the lane boundaries and numerical estimation of lane curvature and vehicle position.",
            "images" : ["https://github.com/CodyNicholson/Self-Driving_Car_Projects_Website/blob/master/images/highlighted_lane.jpg?raw=true","https://github.com/CodyNicholson/Self-Driving_Car_Projects_Website/blob/master/images/curved_img_before_perspective_transform.jpg?raw=true","https://github.com/CodyNicholson/Self-Driving_Car_Projects_Website/blob/master/images/warped_test_curved.jpg?raw=true"],
            "captions": ["This is a single frame of the output of my project, the highlighted lane","This is an example of an image before being warped using the computer vision perspective transform","This image is the same image as the one before this one, it has just been zoomed into and stretched out to a bird's-eye view"],
            "link": "https://github.com/CodyNicholson/Advanced_Lane_Line_Finding_Project"
        },
        {
            "title" : "Behavioral Cloning Project",
            "dates" : "May 2017",
            "description" : "In this project I used the simulator provided by Udacity to collect data of good driving behavior. I then built a convolution neural network in Keras that predicts steering angles from images."+
                "Then I trained and validated the model with a training and validation set. After that I tested that the model successfully drives around the track without leaving the road, and posted a video of this on "+
                "youtube that there is a link for in the project summary on github. Lastly, I summarized the results with a written report.",
            "images" : ["https://github.com/CodyNicholson/Self-Driving_Car_Projects_Website/blob/master/images/bcloning_Drive_Test.jpg?raw=true","https://github.com/CodyNicholson/Self-Driving_Car_Projects_Website/blob/master/images/center_lane_driving.jpg?raw=true","https://github.com/CodyNicholson/Self-Driving_Car_Projects_Website/blob/master/images/training_vs_validation.jpg?raw=true"],
            "captions": ["In this image the car is driving itself, and in the console you can see the values for the car's angle and speed values","This is an example of a training image that was used to teach the model what good driving looks like","In this image you can see that the mean squared error is only a bit lower when testing on the validation set than it was for the training set"],
            "link": "https://github.com/CodyNicholson/Behavioral_Cloning_Project"
        },
        {
            "title" : "Traffic Sign Classifier",
            "dates" : "April 2017 - May 2017",
            "description" : "In this project I used a deep convolutional neural network to classify images of German traffic signs. The model architecture is inspired by the LeNet architecture created by Yann LeCun." +
                " I did this by preprocessing my dataset, constructing a model architecture, tuning my hyper-parameters, and training my model. I made this project as a student enrolled in the Self-Driving Car "+
                "Nanodegree program.",
            "images" : ["https://github.com/CodyNicholson/Self-Driving_Car_Projects_Website/blob/master/images/stopSign.jpg?raw=true","https://github.com/CodyNicholson/Self-Driving_Car_Projects_Website/blob/master/images/traffic_sign_model_architecture.jpg?raw=true","https://github.com/CodyNicholson/Self-Driving_Car_Projects_Website/blob/master/images/lenet.jpg?raw=true"],
            "captions": ["This is just one example of the 42 traffic signs my project can be used to classify","This image shows my model architecture at a high level","My model architecture is based off of this model architecture created by Yann LeCun called 'LeNet'"],
            "link": "https://github.com/CodyNicholson/Traffic_Sign_Classifier_Project"
        },
        {
            "title" : "Finding Lane Lines Project",
            "dates" : "March 2017",
            "description" : "The Finding Lane Lines Project was the first project I completed as a part of the Self-Driving Car Nanodegree Program offered by Udacity. In this project I programmed in python using the computer vision 2 library. I read in " +
                "images of roads, identified the lane lines, and highlighted them in red. This is important because we can teach self-driving cars to stay between these lines. " +
                "I did this by reading in each picture, gray scaling it to eliminate noise, applying the Gaussian blur to make the objects in the image more general, detecting the gradient with the Canny edge detection algorithm to find the lines, masking the image so that " +
                "we only look at the area we are interested in, finding the Hough Lines, filtering out the lines we don't want by looking only at lines with a certain slope, and finally highlighting the lines we found red.",
            "images" : ["https://github.com/CodyNicholson/Self-Driving_Car_Projects_Website/blob/master/images/solidWhiteRight.jpg?raw=true","https://github.com/CodyNicholson/Self-Driving_Car_Projects_Website/blob/master/images/solidWhiteRightprocessed.jpg?raw=true","https://github.com/CodyNicholson/Self-Driving_Car_Projects_Website/blob/master/images/solidYellowLeft.jpg?raw=true","https://github.com/CodyNicholson/Self-Driving_Car_Projects_Website/blob/master/images/solidYellowLeftprocessed.jpg?raw=true"],
            "captions": ["The solid white right lane line picture before processing","The solid white right lane line picture after processing","The solid yellow left lane line picture before processing","The solid yellow left lane line picture after processing"],
            "link": "https://github.com/CodyNicholson/Finding_Lane_Lines"
        }
    ]
};

projects.display = function()
{
    for (p in projects.projs)
    {
        // Creates a div with class work-entry
        $("#projects").append(HTMLprojectStart);
        // Creates variables to hold the project information for each job
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projs[p].title).replace("%link%", projects.projs[p].link);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projs[p].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projs[p].description);
        // Adds the Employment description to the newly created div
        $(".project-entry:last").append(formattedTitle).append(formattedDates).append(formattedDescription);
        if (projects.projs[p].images.length > 0)
        {
            for (i in projects.projs[p].images)
            {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projs[p].images[i]).replace("%link%", projects.projs[p].link);
                formattedImage = formattedImage.replace("%caption%", projects.projs[p].captions[i]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedlinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn);

var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location[0]);

$("#header").prepend(formattedRole).prepend(formattedName).append(formattedwelcomeMessage).prepend(HTMLreturnHome);
$("#topContacts").append(formattedEmail).append(formattedGithub).append(formattedlinkedIn).append(formattedLocation);
$("#footerContacts").append(formattedEmail).append(formattedGithub).append(formattedlinkedIn).append(formattedLocation);


// Runs the display functions
projects.display();

// Adds all my skills to index.html
for(i = 0; i < bio.skills.length; i++)
{
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
}
