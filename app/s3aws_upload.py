# import boto3
# import botocore
# import os
# import uuid

#        // "boto3": {
        # //     "hashes": [
        # //         "sha256:49ca02fbe8bd74da8f5bba5ae83788ce60354c6628773fa4affff1b58351fc0c",
        # //         "sha256:a50797af662cc8bec77cda51e92fe0d26f4909780b3dd3430d22c96748c48706"
        # //     ],
        # //     "index": "pypi",
        # //     "version": "==1.19.1"
        # // },
        # // "botocore": {
        # //     "hashes": [
        # //         "sha256:0a52801ce5a8835bedfc71a3e1143545e17cc146638d4dd23672055738cac253",
        # //         "sha256:32897b949415873534bd84c95d82485a5f3ce88fc72638bfd829afa4f97be8d6"
        # //     ],
        # //     "markers": "python_version >= '3.6'",
        # //     "version": "==1.22.1"
        # // },

# BUCKET_NAME = os.environ.get("S3_BUCKET")
# S3_LOCATION = f"https://{BUCKET_NAME}.s3.amazonaws.com/"
# ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif", "mp4", "mov", "wmv"}


# s3 = boto3.client(
#    "s3",
#    aws_access_key_id=os.environ.get("S3_KEY"),
#    aws_secret_access_key=os.environ.get("S3_SECRET")
# )

# def allowed_file(filename):
#     return "." in filename and \
#            filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

# def get_unique_filename(filename):
#     ext = filename.rsplit(".", 1)[1].lower()
#     unique_filename = uuid.uuid4().hex
#     return f"{unique_filename}.{ext}"

# def upload_file_to_s3(file, acl="public-read"):
#     try:
#         s3.upload_fileobj(
#             file,
#             # BUCKET_NAME,
#             'ingestiblesapp',
#             file.filename,
#             ExtraArgs={
#                 "ACL": acl,
#                 "ContentType": file.content_type
#             }
#         )
#     except Exception as e:
#         # in case the our s3 upload fails
#         return {"errors": str(e)}

#     return {"url": f"{S3_LOCATION}{file.filename}"}
