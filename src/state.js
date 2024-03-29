import {embedArr, fitnessScores, initialFitness, blockFrequency, loss, val_loss} from './embeddings';

let models = ['Load Network', 'AlexNet', 'LeNet', 'CustomizedNet', 'VGG', 'VGG11', 'VGG13', 'VGG16', 'VGG19', 'BigNet', 'ResNet34', 'ResNet50', 'ResNet101', 'Mask CNN', 'Yolo V3', 'MobileNet', 'IDFaceRec', 'DeepPubV3', 'ImageCaptioning'];

let optimizers = ['Adam', 'RMS Prop', 'Gradient Descent', 'Stochastic GD', 'Mini-Batch GD'];

let losses = ['Cross Entropy', 'Mean Square', 'Mean Absolute', 'Mean Square Log', 'Binary Cross Entropy', 'Hinge', 'Square Hinge', 'KLD', 'Focal'];

let datasets = ['Load', 'MNIST', 'COCO', 'ImageNet', 'Segment140', 'WordNet', 'Yelp Reviews'];

let operations = ['Union', 'Intersection', 'Compliment']

let selected = {model: 'AlexNet', optimizer: 'Adam', loss: 'Cross Entropy', dataset: 'MNIST', operation: 'Union'};

let trainModel = false;

let search = false;

let searchSpaceDisplay = false;

let dataRec = true;

let hoverMask = null;

let canvasModel = null;

let barHover = null;

let nodeIds = [];

let selectedNode = null;

let state = {models: models, optimizers: optimizers, losses: losses, datasets: datasets, selected: selected, operations: operations, embed:embedArr, searchSpaceDisplay: searchSpaceDisplay, dataRec: dataRec, hoverMask: hoverMask, canvasModel: canvasModel, fitnessScores: fitnessScores, initialFitness: initialFitness, blockFrequency: blockFrequency, barHover: barHover, nodeIds: nodeIds, selectedNode: selectedNode, onCanvas: true, trainModel: trainModel, search: search, loss: loss, valLoss: val_loss, iteration: 1};

export default state;

