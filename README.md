🚀 TensorFlow.js [Machine Learning] 
👩‍💻 Developed by

Tanvi Beer
USN: CM23020
Course: CSE (AI/ML)
Institute: SB Jain Institute of Technology Management and Research

📌 Project Overview

This repository contains a series of TensorFlow.js practical implementations demonstrating how Machine Learning and Deep Learning models can run directly in the web browser using JavaScript.

The experiments range from basic tensor operations to advanced AI applications such as image classification, pose detection, object detection, sentiment analysis, and music genre prediction.

All implementations are client-side AI applications, meaning they run directly in the browser without requiring backend servers.

🧠 Technologies Used
HTML5
CSS3
JavaScript (ES6)
TensorFlow.js
Web APIs (Webcam, Audio API, Canvas)
Pre-trained Deep Learning Models
📚 Experiments Included
🔹 Pre-Lab: Hello TensorFlow.js

This experiment verifies the correct installation of TensorFlow.js and demonstrates basic tensor operations.

Tasks Performed
Creating tensors
Performing mathematical operations
Tensor addition
Printing tensor values
Example Operations
tf.tensor()
tf.add()
tensor.print()
Objective

To understand the basic functionality of tensors and operations in TensorFlow.js.

🔹 1. Linear Regression with Synthetic Data

This experiment demonstrates how to build a simple regression model using synthetic training data.

Concepts Used
Supervised Learning
Sequential Models
Dense Layers
TensorFlow.js APIs
tf.sequential()
tf.layers.dense()
model.compile()
model.fit()
Objective

To learn how to train a machine learning model directly in the browser.

🔹 2. Digit Recognition (MNIST Dataset)

This experiment trains a Convolutional Neural Network (CNN) to recognize handwritten digits.

Dataset

MNIST dataset containing 28×28 grayscale images of digits (0–9).

Model Components
Convolution Layers
Pooling Layers
Dense Layers
Softmax Output Layer
Outcome

The trained model can predict handwritten digits with high accuracy.

🔹 3. Text Sentiment Analysis

This experiment performs sentiment classification on text data.

Objective

Classify text into:

Positive sentiment
Negative sentiment
Techniques Used
Recurrent Neural Networks (RNN)
Pre-trained sentiment models
Applications
Social media analysis
Product review analysis
Customer feedback analysis
🔹 4. Image Classification with MobileNet

This experiment uses a pre-trained MobileNet deep learning model to classify images.

Features
Upload an image
Analyze using MobileNet
Display predicted object labels
Advantages
Fast predictions
No training required
High accuracy
🔹 5. Webcam-Based Object Detection

This experiment performs real-time object detection using the webcam.

Workflow
Webcam captures live frames
Frames are processed by TensorFlow.js
Model predicts objects
Predictions displayed on screen
Applications
Smart surveillance
AI-based monitoring systems
Interactive web applications
🔹 6. Pose Detection using PoseNet

This project detects human body poses using the PoseNet deep learning model.

Key Features
Detect body keypoints
Track body movement
Visualize skeleton structure
Example Keypoints
Nose
Eyes
Shoulders
Elbows
Knees
Ankles
Applications
Fitness tracking
Gesture recognition
Motion analysis
🔹 7. Deploying a Model in the Browser

This experiment demonstrates how to save and reload trained machine learning models.

Steps
Train model
Save model locally
Reload saved model
Run predictions
TensorFlow.js Functions Used
model.save()
tf.loadLayersModel()
Objective

Understand model deployment for web-based AI applications.

🔹 8. Transfer Learning with Images

This experiment demonstrates transfer learning using MobileNet.

Goal

Train a model for custom image categories.

Example Categories
Fruits
Animals
Objects
Process
Load pre-trained MobileNet
Freeze base layers
Train new classification layer
Predict custom images
Benefit

Requires very small datasets compared to training from scratch.

🎵 Post-Lab Project: Music Genre Analyzer
📌 Overview

The Music Genre Analyzer is an AI-powered web application that classifies music into different genres using machine learning with TensorFlow.js.

The model analyzes audio features and predicts the genre of the music track.