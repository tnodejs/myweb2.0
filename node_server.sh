#!/bin/sh
action=$1

dir=`pwd`

ststem_dir="${dir}"

mkdir -p /data/node_log/data_import_project

if [ "$action" == "start" ] ;then
idppstr=`ps -ef | grep -v  grep| grep "/usr/local/bin/node ${ststem_dir}/app"`
str=`echo $idppstr| awk -F ' ' '{print $8}'`
# check server exist
if [ "$str" == "" ] ;then
echo `${ststem_dir}/node_modules/forever/bin/forever -m 100 start -a -l /data/node_log/data_import_project/forever.log -o /data/node_log/data_import_project/out.log -e /data/node_log/data_import_project/err.log ${ststem_dir}/app`
echo "server start!"
else
echo "exist this server"
fi

# stop server
elif [ "$action" == "stop" ] ;then
idstr=`ps -ef | grep -v  grep| grep "/usr/local/bin/node ${ststem_dir}/node_modules/forever/bin/monitor ${ststem_dir}/app"`
idppstr=`ps -ef | grep -v  grep| grep "/usr/local/bin/node ${ststem_dir}/app"`
# find server id
str=`echo $idstr| awk -F ' ' '{print $8}'`
forever_id=`echo $idstr | awk -F ' ' '{print $2}'`
pp_id=`echo $idppstr| awk -F ' ' '{print $2}'`
# check server exist
if [ "$str" == "grep" ] ;then
echo "can not find this server id"
exit
fi

kill -9 $forever_id $pp_id
echo "server stop!"

# restart server
elif [ "$action" == "restart" ] ;then
idstr=`ps -ef | grep -v  grep| grep "/usr/local/bin/node ${ststem_dir}/node_modules/forever/bin/monitor ${ststem_dir}/app"`
idppstr=`ps -ef | grep -v  grep| grep "/usr/local/bin/node ${ststem_dir}/app"`
str=`echo $idstr| awk -F ' ' '{print $8}'`
forever_id=`echo $idstr | awk -F ' ' '{print $2}'`
pp_id=`echo $idppstr| awk -F ' ' '{print $2}'`

if [ "$str" == "grep" ] ;then
echo "can not find this server id"
exit
fi
kill -9 $forever_id $pp_id
echo `${ststem_dir}/node_modules/forever/bin/forever -m 100 start -a -l /data/node_log/data_import_project/forever.log -o /data/node_log/data_import_project/out.log -e /data/node_log/data_import_project/err.log ${ststem_dir}/app`
echo "restart success"
fi
