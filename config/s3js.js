const AWS = require('aws-sdk')
require('dotenv').config();
const fs = require('fs')
const crypto = require('crypto')
const { promisify } = require ('util')
const randomBytes = promisify(crypto.randomBytes)

const region= process.env.AWS_REGION
const bucket = process.env.AWS_BUCKET
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
const s3 = new AWS.S3 ({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})

// uploads a file to s3
// function uploadFile(file) {
//   const fileStream = fs.createReadStream(file.path)

//   const uploadParams = {
//     Bucket: bucket,
//     Body: fileStream,
//     Key: file.filename
//   }

//   return s3.upload(uploadParams).promise()
// }
// exports.uploadFile = uploadFile


// // downloads a file from s3
// function getFileStream(fileKey) {
//   const downloadParams = {
//     Key: fileKey,
//     Bucket: bucketName
//   }

//   return s3.getObject(downloadParams).createReadStream()
// }
// exports.getFileStream = getFileStream

 async function generateUploadURL() {
    let rawBytes = await randomBytes(16)
   let imageName = rawBytes.toString('hex')
    console.log(rawBytes)
    console.log(imageName)
  
    let params = ({
      Bucket: bucket,
      Key: imageName,
      Expires: 60
    })
    
    let uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL
  }


module.exports = {
    s3: s3,
    generateUploadURL: generateUploadURL
};