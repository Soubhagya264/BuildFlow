
"use client"
import { getPipelines } from '@/lib/queries';
import { Prisma } from '@prisma/client';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader } from '../ui/card';
import { Progress } from '../ui/progress';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';

interface PipelineValueProps {
    subAccountId: string;
}

const PipelineValue: React.FC<PipelineValueProps> = ({ subAccountId }) => {
    const [pipelines, setPipelines] = useState<Prisma.PromiseReturnType<typeof getPipelines>>([])
    const [selectedPipelineId, setselectedPipelineId] =
        React.useState<string>("");
    const [pipelineClosedValue, setPipelineClosedValue] =
        React.useState<number>(0);
    useEffect(() => {
        const fetchData = async () => {
            const res = await getPipelines(subAccountId);

            setPipelines(res);
            setselectedPipelineId(res[0]?.id);
        };
        fetchData();
    }, [subAccountId]);
    const totalPipelineValue = React.useMemo(() => {
        if (pipelines.length) {
            return (
                pipelines
                    .find((pipeline) => pipeline.id === selectedPipelineId)
                    ?.Lane?.reduce((totalLanes, lane, currentLaneIndex, array) => {
                        const laneTicketsTotal = lane.Tickets.reduce(
                            (totalTickets, ticket) => totalTickets + Number(ticket?.value),
                            0
                        );

                        if (currentLaneIndex === array.length - 1) {
                            setPipelineClosedValue(laneTicketsTotal || 0);
                            return totalLanes;
                        }

                        return totalLanes + laneTicketsTotal;
                    }, 0) || 0
            );
        }
        return 0;
    }, [selectedPipelineId, pipelines]);
    const pipelineRate = React.useMemo(
        () =>
            (pipelineClosedValue / (totalPipelineValue + pipelineClosedValue)) * 100,
        [pipelineClosedValue, totalPipelineValue]
    );
    return (
        <Card className="relative w-full xl:w-[350px]">
            <CardHeader>
                <CardDescription>Pipeline Value</CardDescription>
                <small className="text-xs text-muted-foreground">
                    Pipeline Progress
                </small>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs text-muted-foreground">
                            Closed ${pipelineClosedValue}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground">
                            Total ${totalPipelineValue + pipelineClosedValue}
                        </p>
                    </div>
                </div>
                <Progress color="green" value={pipelineRate} className="h-2" />
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
                <p className="mb-2">
                    Total value of all tickets in the given pipeline except the last lane.
                    Your last lane is considered your closing lane in every pipeline.
                </p>
                <Select
                    value={selectedPipelineId}
                    onValueChange={setselectedPipelineId}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a pipeline" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Pipelines</SelectLabel>
                            {pipelines.map((pipeline) => (
                                <SelectItem value={pipeline.id} key={pipeline.id}>
                                    {pipeline.name}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </CardContent>
        </Card>
    );
}

export default PipelineValue;
