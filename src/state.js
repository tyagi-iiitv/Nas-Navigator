let models = ['Load Network', 'AlexNet', 'LeNet', 'CustomizedNet', 'VGG', 'VGG11', 'VGG13', 'VGG16', 'VGG19', 'BigNet', 'ResNet34', 'ResNet50', 'ResNet101', 'Mask CNN', 'Yolo V3', 'MobileNet', 'IDFaceRec', 'DeepPubV3', 'ImageCaptioning'];

let optimizers = ['Adam', 'RMS Prop', 'Gradient Descent', 'Stochastic GD', 'Mini-Batch GD'];

let losses = ['Cross Entropy', 'Mean Square', 'Mean Absolute', 'Mean Square Log', 'Binary Cross Entropy', 'Hinge', 'Square Hinge', 'KLD', 'Focal'];

let datasets = ['Load', 'MNIST', 'COCO', 'ImageNet', 'Segment140', 'WordNet', 'Yelp Reviews'];

let selected = {model: 'AlexNet', optimizer: 'Adam', loss: 'Cross Entropy', dataset: 'MNIST', trainModel: false, search:false};

let state = {models: models, optimizers: optimizers, losses: losses, datasets: datasets, selected: selected};

export default state;
