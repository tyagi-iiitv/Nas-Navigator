let models = ['Load Network', 'AlexNet', 'LeNet', 'CustomizedNet', 'VGG', 'VGG11', 'VGG13', 'VGG16', 'VGG19', 'BigNet', 'ResNet34', 'ResNet50', 'ResNet101', 'Mask CNN', 'Yolo V3', 'MobileNet', 'IDFaceRec', 'DeepPubV3', 'ImageCaptioning'];

let optimizers = ['Adam', 'RMS Prop', 'Gradient Descent', 'Stochastic GD', 'Mini-Batch GD'];

let losses = ['Cross Entropy', 'Mean Square', 'Mean Absolute', 'Mean Square Log', 'Binary Cross Entropy', 'Hinge', 'Square Hinge', 'KLD', 'Focal'];

let datasets = ['Load', 'MNIST', 'COCO', 'ImageNet', 'Segment140', 'WordNet', 'Yelp Reviews'];

let operations = ['Union', 'Intersection', 'Compliment']

let selected = {model: 'AlexNet', optimizer: 'Adam', loss: 'Cross Entropy', dataset: 'MNIST', trainModel: false, search:false, operation: 'Union'};

let embedArr = [{x:1, y:1}, {x:2, y:1}, {x:10, y:1}, {x:5, y:10}]

let state = {models: models, optimizers: optimizers, losses: losses, datasets: datasets, selected: selected, operations: operations, embed:embedArr};

export default state;

