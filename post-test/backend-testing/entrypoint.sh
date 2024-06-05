# collection_files=$COLLECTION_FILES
env_file_default="./environments/default.postman_environment.json"
count=1
status_all=0

# for file in $collection_files
# Read file in postman folder
for file in ./*.postman_collection.json
do
  tmp="$(basename -- $file)"
  filename=${tmp/".postman_collection.json"/""}
  collection_basename=${tmp%.postman_collection.json} # ลบนามสกุลไฟล์ ที่จะนำไปสร้าง Report HTMl
    newman run $file \
    -k -r htmlextra,cli,junit \
    --reporter-htmlextra-export="reports/report_$collection_basename.html" \
    --reporter-junit-export="reports/junitReport_$collection_basename.xml"

  status=$?
  if [ $status -eq 1 ]
  then
    status_all=1
  fi
  count=$(( $count + 1 ))
done
chmod -R o+rwx ./reports
exit $status_all

# echo "test"
# ls

# newman run ./backend1.postman_collection.json\
#     -k -r htmlextra,cli,junit \
#     --reporter-htmlextra-export="reports/report_1.html" \
#     --reporter-junit-export="reports/junitReport_1.xml"